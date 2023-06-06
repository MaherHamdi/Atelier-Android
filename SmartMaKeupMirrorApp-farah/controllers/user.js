import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';


import sgMail from '@sendgrid/mail';
sgMail.setApiKey('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');

import crypto from 'crypto';



//import crypto from 'crypto';
//import sgMail from '@sendgrid/mail';


import bcrypt from 'bcryptjs';
const jwtSecret = "c220f8126a03bf39ae58528487e0d7fafe692deafa0d387f221b3a17ba40930c8a82a8"

var emm
var codeDeReinit

export function getAll(req, res) {

    User
        .find({})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function addOnce(req, res) {
    // Invoquer la méthode create directement sur le modèle
    const { name, email, password, birthday, image, address, phone } = req.body;



    bcrypt.hash(password, 10).then(async(hash) => {
        await User.create({
                name,
                email,
                password: hash,
                birthday,
                image,
                address,
                phone

            })
            .then((user) => {
              
              
              
               const link = `http://192.168.1.6:9090/user/verify/${user.id}`;

                const mailOptions = {
                    to: user.email,
                    from: "maher.hamdi@esprit.tn",
                    subject: "Welcome to SmartMakeupMirrorApp",

                    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif">
          <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title>haithem haithouma 123</title><!--[if (mso 16)]>
          <style type="text/css">
          a {text-decoration: none;}
          </style>
          <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
          <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          <![endif]--><!--[if !mso]><!-- -->
          <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap" rel="stylesheet"><!--<![endif]-->
          <style type="text/css">
          #outlook a {
          padding:0;
          }
          .es-button {
          mso-style-priority:100!important;
          text-decoration:none!important;
          }
          a[x-apple-data-detectors] {
          color:inherit!important;
          text-decoration:none!important;
          font-size:inherit!important;
          font-family:inherit!important;
          font-weight:inherit!important;
          line-height:inherit!important;
          }
          .es-desk-hidden {
          display:none;
          float:left;
          overflow:hidden;
          width:0;
          max-height:0;
          line-height:0;
          mso-hide:all;
          }
          [data-ogsb] .es-button {
          border-width:0!important;
          padding:15px 30px 15px 30px!important;
          }
          .es-button-border:hover a.es-button, .es-button-border:hover button.es-button {
          background:#E43D4E!important;
          border-color:#E43D4E!important;
          }
          .es-button-border:hover {
          background:#E43D4E!important;
          border-color:#42d159 #42d159 #42d159 #42d159!important;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:40px!important; text-align:center } h2 { font-size:28px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:40px!important; text-align:center } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:28px!important; text-align:center } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:center } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
          </style>
          </head>
          <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
          <div class="es-wrapper-color" style="background-color:#FFFFFF"><!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ffffff"></v:fill>
          </v:background>
          <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
          <tr>
          <td valign="top" style="padding:0;Margin:0">
          <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#F3E2D8;background-repeat:repeat;background-position:center top">
          <tr>
          <td align="center" style="padding:0;Margin:0">
          <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F3E2D8;width:600px">
          <tr>
          <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:14px"><img src="https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/group_90.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="50" title="Logo" width="246"></a></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table>
          <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
          <tr>
          <td align="center" bgcolor="#F3E2D8" style="padding:0;Margin:0;background-color:#f3e2d8">
          <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#f3e2d8;width:600px" cellspacing="0" cellpadding="0" bgcolor="#F3E2D8" align="center">
          <tr>
          <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;padding-bottom:40px">
          <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:560px">
          <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:16px"><img class="adapt-img" src="https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/group_89_Ouc.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="515" height="331"></a></td>
          </tr>
          <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:30px"><h1 style="Margin:0;line-height:55px;mso-line-height-rule:exactly;font-family:Prompt, sans-serif;font-size:46px;font-style:normal;font-weight:bold;color:#2E175A">` + user.name + `</h1></td>
          </tr>
          <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#563993;font-size:16px">Hi! Welcome! Thanks for joining!&nbsp;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></td>
          </tr>
          <tr>
          <td align="center" style="padding:0;Margin:0"><!--[if mso]><a href=` + link + ` target="_blank" hidden>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href=` + link + `
          style="height:51px; v-text-anchor:middle; width:274px" arcsize="51%" stroke="f" fillcolor="#bc2919">
          <w:anchorlock></w:anchorlock>
          <a href =` + link + `>
          <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:18px; font-weight:400; line-height:18px; mso-text-raise:1px'>VERIFY</center>
          </v:roundrect></a>
          <![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#2CB543;background:#BC2919;border-width:0px;display:inline-block;border-radius:30px;width:auto"><a href=` + link + ` class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#BC2919;border-width:15px 30px 15px 30px;display:inline-block;background:#BC2919;border-radius:30px;font-family:Prompt, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">START A PROJECT</a></span><!--<![endif]--></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table>
          <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
          <tr>
          <td align="center" background="https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/mask_group_T5s.png" style="padding:0;Margin:0;background-image:url(https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/mask_group_T5s.png);background-repeat:no-repeat;background-position:center bottom">
          <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
          <tr>
          <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
          <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#fef3ed" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#fef3ed;border-radius:45px" role="presentation">
          <tr>
          <td align="center" style="Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:30px;font-size:0px"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:16px"><img class="adapt-img" src="https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/group1.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="252" width="229"></a></td>
          </tr>
          <tr>
          <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px"><h2 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Prompt, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#2E175A"><a href=` + link + ` target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:28px">Discover new projects</a></h2></td>
          </tr>
          <tr>
          <td align="center" class="es-m-p20r es-m-p20l" style="Margin:0;padding-top:10px;padding-bottom:30px;padding-left:40px;padding-right:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#563993;font-size:16px">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table>
          <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
          <tr>
          <td align="center" background="https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/mask_group_5Fp.png" style="padding:0;Margin:0;background-image:url(https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/mask_group_5Fp.png);background-repeat:no-repeat;background-position:center bottom">
          <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
          <tr>
          <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
          <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#fef3ed" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#fef3ed;border-radius:45px" role="presentation">
          <tr>
          <td align="center" style="Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:30px;font-size:0px"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:16px"><img class="adapt-img" src="https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/group2.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="252" width="252"></a></td>
          </tr>
          <tr>
          <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px"><h2 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Prompt, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#2E175A"><a href=` + link + ` target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:28px">From idea to market</a></h2></td>
          </tr>
          <tr>
          <td align="center" class="es-m-p20r es-m-p20l" style="Margin:0;padding-top:10px;padding-bottom:30px;padding-left:40px;padding-right:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#563993;font-size:16px">Interdum velit euismod in pellentesque. Nec feugiat in fermentum posuere urna. Velit dignissim sodales ut eu sem integer vitae justo eget. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.</p></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table>
          <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
          <tr>
          <td align="center" background="https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/mask_group_lfP.png" style="padding:0;Margin:0;background-image:url(https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/mask_group_lfP.png);background-repeat:no-repeat;background-position:center bottom">
          <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
          <tr>
          <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
          <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#fef3ed" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#fef3ed;border-radius:45px" role="presentation">
          <tr>
          <td align="center" style="Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:30px;font-size:0px"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:16px"><img class="adapt-img" src="https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/group.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="252" width="270"></a></td>
          </tr>
          <tr>
          <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px"><h2 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Prompt, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#2E175A"><a href=` + link + ` target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:28px">Start a project</a></h2></td>
          </tr>
          <tr>
          <td align="center" class="es-m-p20r es-m-p20l" style="Margin:0;padding-top:10px;padding-bottom:30px;padding-left:40px;padding-right:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#563993;font-size:16px">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table>
          <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
          <tr>
          <td align="center" style="padding:0;Margin:0">
          <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
          <tr>
          <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;padding-bottom:40px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="left" style="padding:0;Margin:0;width:560px">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h2 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Prompt, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#2E175A">Questions?</h2></td>
          </tr>
          <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#563993;font-size:14px"><a href=` + link + ` target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:14px">Learn more about us</a>&nbsp;and&nbsp;<a href=` + link + ` target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:14px">sign up to receive updates</a>&nbsp;from our team.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#563993;font-size:14px">Reply to this email or call to connect with us.</p></td>
          </tr>
          <tr>
          <td align="center" style="padding:0;Margin:0;padding-bottom:40px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#BC2919;border-width:0px;display:inline-block;border-radius:30px;width:auto"><a href="" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#BC2919;border-width:15px 30px 15px 30px;display:inline-block;background:#BC2919;border-radius:30px;font-family:Prompt, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">+ (000) 123 456 789</a></span></td>
          </tr>
          <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px;font-size:0px"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:14px"><img src="https://ahhxou.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/group_90.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="40" title="Logo" width="197"></a></td>
          </tr>
          <tr>
          <td align="center" style="padding:0;Margin:0;padding-bottom:20px;font-size:0">
          <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:25px"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:14px"><img title="Facebook" src="https://ahhxou.stripocdn.email/content/assets/img/social-icons/rounded-black/facebook-rounded-black.png" alt="Fb" height="24" width="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:25px"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:14px"><img title="Twitter" src="https://ahhxou.stripocdn.email/content/assets/img/social-icons/rounded-black/twitter-rounded-black.png" alt="Tw" height="24" width="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:25px"><a target="_blank" href=` + link + `" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:14px"><img title="Instagram" src="https://ahhxou.stripocdn.email/content/assets/img/social-icons/rounded-black/instagram-rounded-black.png" alt="Inst" height="24" width="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
          <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:14px"><img title="Youtube" src="https://ahhxou.stripocdn.email/content/assets/img/social-icons/rounded-black/youtube-rounded-black.png" alt="Yt" height="24" width="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
          </tr>
          </table></td>
          </tr>
          <tr>
          <td style="padding:0;Margin:0">
          <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr class="links">
          <td align="center" valign="top" width="25%" id="esd-menu-id-0" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#563993;font-size:14px">Location</a></td>
          <td align="center" valign="top" width="25%" id="esd-menu-id-1" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#563993;font-size:14px">Contact</a></td>
          <td align="center" valign="top" width="25%" id="esd-menu-id-2" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#563993;font-size:14px">Help</a></td>
          <td align="center" valign="top" width="25%" id="esd-menu-id-3" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#563993;font-size:14px">Privacy</a></td>
          </tr>
          </table></td>
          </tr>
          <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#563993;font-size:12px">You are receiving this email because you have visited our site or asked us about the regular newsletter. Make sure our messages get to your Inbox (and not your bulk or junk folders).<br><a target="_blank" href=` + link + ` style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:12px">Privacy police</a>&nbsp;|&nbsp;<a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#563993;font-size:12px" href="">Unsubscribe</a></p></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table>
          <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
          <tr>
          <td align="center" style="padding:0;Margin:0">
          <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
          <tr>
          <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="left" style="padding:0;Margin:0;width:560px">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" class="es-infoblock made_with" style="padding:0;Margin:0;line-height:120%;font-size:0;color:#CCCCCC"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=crowdfunding_2&utm_content=turn_your_ideas_into_reality" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://ahhxou.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt width="125" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="56"></a></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table>
          </div>
          </body>
          </html>`,

                };

                sendEmail(mailOptions);
            })
            .catch((error) =>
                res.status(400).json({
                    message: "User not successful created",
                    error: error.message,
                })
            );
    });
}

export function getOnce(req, res) {
    User
        .findOne({ "id": req.params.id })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}



/**
 * Mettre à jour un seul document
 */
export function patchOnce(req, res) {
  
    User
        .findOneAndUpdate({ "email": req.params.email }, req.body)
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

/**
 * Supprimer un seul document
 */
export function deleteOnce(req, res) {
    User
        .findOneAndRemove(req.params.id)
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });

}

function generateUserToken(user) {
    return jwt.sign({ user }, 'mtar', { expiresIn: '1h' })
}

export async function login(req, res, next) {
    const { email, password } = req.body
        // Check if username and password is provided
    if (!email || !password) {
        return res.status(400).json({
            message: "Username or Password not present",
        })
    }
    try {
        const user = await User.findOne({ email })
        console.log(user)
        if (!user) {
            res.status(400).json({
                message: "Login not successful",
                error: "User not found",
            })
        } else {
            // comparing given password with hashed password
            bcrypt.compare(password, user.password).then(function(result) {
                result
                    ?
                    res.status(200).json({
                        message: "Login successful",
                        user,
                    }) :
                    res.status(400).json({ message: "Login not succesful" })
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}


export async function forgotPassword(req, res) {

    const user = await User.findOne({ email: req.body.email })

    if (user) {
        // token creation
        await sendOTP(req.body.email)

        res.status(200).send({
            message: "L'email de reinitialisation a été envoyé a " + user.email,
        })
    } else {
        res.status(404).send({ message: "User innexistant" })
    }
}
export async function sendOTP(email) {
    const code = Math.floor(Math.random() * (99999 - 10000) + 10000);
    const user = await User.findOne({ email: email })
    user.code = code;
    user.save();

    const mailOptions = {
        to: email,
        from: "maher.hamdi@esprit.tn",
        subject: "Password change request",
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
              <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <meta name="x-apple-disable-message-reformatting" />
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                  <meta name="color-scheme" content="light dark" />
                  <meta name="supported-color-schemes" content="light dark" />
                  <title></title>
                  <style type="text/css" rel="stylesheet" media="all">
                  /* Base ------------------------------ */
                  
                  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
                  body {
                    width: 100% !important;
                    height: 100%;
                    margin: 0;
                    -webkit-text-size-adjust: none;
                  }
                  
                  a {
                    color: #3869D4;
                  }
                  
                  a img {
                    border: none;
                  }
                  
                  td {
                    word-break: break-word;
                  }
                  
                  .preheader {
                    display: none !important;
                    visibility: hidden;
                    mso-hide: all;
                    font-size: 1px;
                    line-height: 1px;
                    max-height: 0;
                    max-width: 0;
                    opacity: 0;
                    overflow: hidden;
                  }
                  /* Type ------------------------------ */
                  
                  body,
                  td,
                  th {
                    font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
                  }
                  
                  h1 {
                    margin-top: 0;
                    color: #333333;
                    font-size: 22px;
                    font-weight: bold;
                    text-align: left;
                  }
                  
                  h2 {
                    margin-top: 0;
                    color: #333333;
                    font-size: 16px;
                    font-weight: bold;
                    text-align: left;
                  }
                  
                  h3 {
                    margin-top: 0;
                    color: #333333;
                    font-size: 14px;
                    font-weight: bold;
                    text-align: left;
                  }
                  
                  td,
                  th {
                    font-size: 16px;
                  }
                  
                  p,
                  ul,
                  ol,
                  blockquote {
                    margin: .4em 0 1.1875em;
                    font-size: 16px;
                    line-height: 1.625;
                  }
                  
                  p.sub {
                    font-size: 13px;
                  }
                  /* Utilities ------------------------------ */
                  
                  .align-right {
                    text-align: right;
                  }
                  
                  .align-left {
                    text-align: left;
                  }
                  
                  .align-center {
                    text-align: center;
                  }
                  
                  .u-margin-bottom-none {
                    margin-bottom: 0;
                  }
                  /* Buttons ------------------------------ */
                  
                  .button {
                    background-color: #3869D4;
                    border-top: 10px solid #3869D4;
                    border-right: 18px solid #3869D4;
                    border-bottom: 10px solid #3869D4;
                    border-left: 18px solid #3869D4;
                    display: inline-block;
                    color: #FFF;
                    text-decoration: none;
                    border-radius: 3px;
                    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
                    -webkit-text-size-adjust: none;
                    box-sizing: border-box;
                  }
                  
                  .button--green {
                    background-color: #22BC66;
                    border-top: 10px solid #22BC66;
                    border-right: 18px solid #22BC66;
                    border-bottom: 10px solid #22BC66;
                    border-left: 18px solid #22BC66;
                  }
                  
                  .button--red {
                    background-color: #FF6136;
                    border-top: 10px solid #FF6136;
                    border-right: 18px solid #FF6136;
                    border-bottom: 10px solid #FF6136;
                    border-left: 18px solid #FF6136;
                  }
                  
                  @media only screen and (max-width: 500px) {
                    .button {
                      width: 100% !important;
                      text-align: center !important;
                    }
                  }
                  /* Attribute list ------------------------------ */
                  
                  .attributes {
                    margin: 0 0 21px;
                  }
                  
                  .attributes_content {
                    background-color: #F4F4F7;
                    padding: 16px;
                  }
                  
                  .attributes_item {
                    padding: 0;
                  }
                  /* Related Items ------------------------------ */
                  
                  .related {
                    width: 100%;
                    margin: 0;
                    padding: 25px 0 0 0;
                    -premailer-width: 100%;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                  }
                  
                  .related_item {
                    padding: 10px 0;
                    color: #CBCCCF;
                    font-size: 15px;
                    line-height: 18px;
                  }
                  
                  .related_item-title {
                    display: block;
                    margin: .5em 0 0;
                  }
                  
                  .related_item-thumb {
                    display: block;
                    padding-bottom: 10px;
                  }
                  
                  .related_heading {
                    border-top: 1px solid #CBCCCF;
                    text-align: center;
                    padding: 25px 0 10px;
                  }
                  /* Discount Code ------------------------------ */
                  
                  .discount {
                    width: 100%;
                    margin: 0;
                    padding: 24px;
                    -premailer-width: 100%;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                    background-color: #F4F4F7;
                    border: 2px dashed #CBCCCF;
                  }
                  
                  .discount_heading {
                    text-align: center;
                  }
                  
                  .discount_body {
                    text-align: center;
                    font-size: 15px;
                  }
                  /* Social Icons ------------------------------ */
                  
                  .social {
                    width: auto;
                  }
                  
                  .social td {
                    padding: 0;
                    width: auto;
                  }
                  
                  .social_icon {
                    height: 20px;
                    margin: 0 8px 10px 8px;
                    padding: 0;
                  }
                  /* Data table ------------------------------ */
                  
                  .purchase {
                    width: 100%;
                    margin: 0;
                    padding: 35px 0;
                    -premailer-width: 100%;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                  }
                  
                  .purchase_content {
                    width: 100%;
                    margin: 0;
                    padding: 25px 0 0 0;
                    -premailer-width: 100%;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                  }
                  
                  .purchase_item {
                    padding: 10px 0;
                    color: #51545E;
                    font-size: 15px;
                    line-height: 18px;
                  }
                  
                  .purchase_heading {
                    padding-bottom: 8px;
                    border-bottom: 1px solid #EAEAEC;
                  }
                  
                  .purchase_heading p {
                    margin: 0;
                    color: #85878E;
                    font-size: 12px;
                  }
                  
                  .purchase_footer {
                    padding-top: 15px;
                    border-top: 1px solid #EAEAEC;
                  }
                  
                  .purchase_total {
                    margin: 0;
                    text-align: right;
                    font-weight: bold;
                    color: #333333;
                  }
                  
                  .purchase_total--label {
                    padding: 0 15px 0 0;
                  }
                  
                  body {
                    background-color: #F2F4F6;
                    color: #51545E;
                  }
                  
                  p {
                    color: #51545E;
                  }
                  
                  .email-wrapper {
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    -premailer-width: 100%;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                    background-color: #F2F4F6;
                  }
                  
                  .email-content {
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    -premailer-width: 100%;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                  }
                  /* Masthead ----------------------- */
                  
                  .email-masthead {
                    padding: 25px 0;
                    text-align: center;
                  }
                  
                  .email-masthead_logo {
                    width: 94px;
                  }
                  
                  .email-masthead_name {
                    font-size: 16px;
                    font-weight: bold;
                    color: #A8AAAF;
                    text-decoration: none;
                    text-shadow: 0 1px 0 white;
                  }
                  /* Body ------------------------------ */
                  
                  .email-body {
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    -premailer-width: 100%;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                  }
                  
                  .email-body_inner {
                    width: 570px;
                    margin: 0 auto;
                    padding: 0;
                    -premailer-width: 570px;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                    background-color: #FFFFFF;
                  }
                  
                  .email-footer {
                    width: 570px;
                    margin: 0 auto;
                    padding: 0;
                    -premailer-width: 570px;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                    text-align: center;
                  }
                  
                  .email-footer p {
                    color: #A8AAAF;
                  }
                  
                  .body-action {
                    width: 100%;
                    margin: 30px auto;
                    padding: 0;
                    -premailer-width: 100%;
                    -premailer-cellpadding: 0;
                    -premailer-cellspacing: 0;
                    text-align: center;
                  }
                  
                  .body-sub {
                    margin-top: 25px;
                    padding-top: 25px;
                    border-top: 1px solid #EAEAEC;
                  }
                  
                  .content-cell {
                    padding: 45px;
                  }
                  /*Media Queries ------------------------------ */
                  
                  @media only screen and (max-width: 600px) {
                    .email-body_inner,
                    .email-footer {
                      width: 100% !important;
                    }
                  }
                  
                  @media (prefers-color-scheme: dark) {
                    body,
                    .email-body,
                    .email-body_inner,
                    .email-content,
                    .email-wrapper,
                    .email-masthead,
                    .email-footer {
                      background-color: #333333 !important;
                      color: #FFF !important;
                    }
                    p,
                    ul,
                    ol,
                    blockquote,
                    h1,
                    h2,
                    h3,
                    span,
                    .purchase_item {
                      color: #FFF !important;
                    }
                    .attributes_content,
                    .discount {
                      background-color: #222 !important;
                    }
                    .email-masthead_name {
                      text-shadow: none !important;
                    }
                  }
                  
                  :root {
                    color-scheme: light dark;
                    supported-color-schemes: light dark;
                  }
                  </style>
                  <!--[if mso]>
                  <style type="text/css">
                    .f-fallback  {
                      font-family: Arial, sans-serif;
                    }
                  </style>
                <![endif]-->
                </head>
                <body>
                  <span class="preheader">Use this link to reset your password. The link is only valid for 24 hours.</span>
                  <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td align="center">
                        <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                            <td class="email-masthead">
                              <a href="https://example.com" class="f-fallback email-masthead_name">
                              SmartMakeupMirrorApp
                            </a>
                            </td>
                          </tr>
                          <!-- Email Body -->
                          <tr>
                            <td class="email-body" width="570" cellpadding="0" cellspacing="0">
                              <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                                <!-- Body content -->
                                <tr>
                                  <td class="content-cell">
                                    <div class="f-fallback">
                                      <h1>Hi ,</h1>
                                      <p>You recently requested to reset your password for your SmartMakeupMirrorApp account. Use the button below to reset it. <strong>This password reset is only valid for the next hour.</strong></p>
                                      <!-- Action -->
                                      <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                          <td align="center">
                                            <!-- Border based button
                         https://litmus.com/blog/a-guide-to-bulletproof-buttons-in-email-design -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                              <tr>
                                                <td align="center">
                                                  <a href=  class="f-fallback button button--green" target="_blank">` + code + `</a>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                      <p>For security,  If you did not request a password reset, please ignore this email or <a href="{{support_url}}">contact support</a> if you have questions.</p>
                                      <p>Thanks,
                                        <br>The SmartMakeupMirrorApp team</p>
                                      <!-- Sub copy -->
                                    
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                  <td class="content-cell" align="center">
                                    <p class="f-fallback sub align-center">
                                      [Company Name, LLC]
                                      <br>1234 Street Rd.
                                      <br>Suite 1234
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </body>
              </html>`,

    };
    sendEmail(mailOptions);

}

function sendEmail(mailOptions) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "maher.hamdi@esprit.tn",
            pass: "Maherhamdi123",
        },
    })

    transporter.verify(function(error, success) {
        if (error) {
            console.log(error)
            console.log("Server not ready")
        } else {
            console.log("Server is ready to take our messages")
        }
    })

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log("Email sent: " + info.response)
        }
    })
}

export function logout(req, res) {
    req.session.destroy();
    return res.send("User logged out!");
}


export async function testcode(req, res) {
    const user = await User.findOne({ code: req.body.code })


    if (user) {
        res.status(200).send({
            message: "code accepte"
        })
    } else {
        res.status(404).send({ message: "oopsi" })
    }
}

export async function changepass(req, res) {
    const user = await User.findOne({ email: req.body.email })


    if (user) {

        var password = req.body.password;
        const encryptedPassword = await bcrypt.hash(password, 10);
        user.password = encryptedPassword;
        user.code = "";
        user.save();



        res.status(200).send({
            message: "saha ya bouha"
        })
    } else {
        res.status(404).send({ message: "oopsi" })
    }
}
export async function verify(req, res) {
    try {
        const user = await User.findOne({ _id: req.params.id });
        user.verified = true;
        user.save();



        res.send("email verified sucessfully");
    } catch (error) {
        console.log("prob");
    }
}
//res.status(200).send({
//message: "saha ya bouha"
//})

//{
//  res.status(404).send({ message: "oopsi" })
//}
/**
export async function verify(req, res) {
    try {
        const user = await User.findOne({ _id: req.params.id });
        user.verified = true;
        user.save();



        res.send("email verified sucessfully");
    } catch (error) {
        console.log("prob");
    }
}
 */
export function putOnce(req, res) {
  let user = {};
  if(req.file == undefined) {
    user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address,
      birthday: req.body.birthday

    }
  }
  else {
    user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address,
      birthday: req.body.birthday,
      image: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`
    }
  }
  User.findByIdAndUpdate(req.params.id, user)
    .then((doc1) => {
      User.findById(req.params.id)
        .then((doc2) => {
          res.status(200).json(doc2);
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}