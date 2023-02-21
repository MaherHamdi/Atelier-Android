package com.example.fromapp

import android.os.Bundle
import android.text.TextUtils
import android.util.Patterns.EMAIL_ADDRESS
import android.widget.Button
import android.widget.EditText
import android.widget.SeekBar
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

private var seekandroidValue = 0
private var seekiosValue = 0
private var seekflutterValue = 0

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val textFullName : EditText = findViewById(R.id.textFullName)
        val textAge : EditText = findViewById(R.id.textAge)
        val textEmail : EditText = findViewById(R.id.textEmail)
        ///
        val buttonNext : Button = findViewById(R.id.ButtonNext)
        val buttonRest : Button = findViewById(R.id.ButtonRest)
        //
        val seekBarAndroid : SeekBar = findViewById(R.id.seekBarAndroid)
        val seekBarIos : SeekBar = findViewById(R.id.seekBarios)
        val seekBarFlutter : SeekBar = findViewById(R.id.seekBarFlutter)


        buttonNext.setOnClickListener {
            if(textFullName.text.isEmpty() || textAge.text.isEmpty() || textEmail.text.isEmpty())
            {
                Toast.makeText(this@MainActivity, "Check your input!", Toast.LENGTH_SHORT).show()
            }
            else if(!isEmailValid(textEmail.text.toString()))
            {
                Toast.makeText(this@MainActivity, "Check your Email!", Toast.LENGTH_SHORT).show()
            }
            else
            {
                ShowToast()
            }
        }

        GetValueSeekBar()

        buttonRest.setOnClickListener {
            textFullName.setText("")
            textAge.setText("")
            textEmail.setText("")

            seekBarAndroid.progress=0
            seekBarIos.progress=0
            seekBarFlutter.progress=0
        }

    }


    /////
    private fun ShowToast()
    {
        if( seekandroidValue > 80 && seekiosValue<80 && seekflutterValue<80 )
        {
            Toast.makeText(this@MainActivity, "« Vous êtes excellent en Android" , Toast.LENGTH_SHORT).show()
        }
        else if( seekiosValue > 80 && seekandroidValue<80 && seekflutterValue<80 )
        {
            Toast.makeText(this@MainActivity, "« Vous êtes excellent en IOS" , Toast.LENGTH_SHORT).show()
        }
        else if(seekflutterValue > 80 && seekiosValue<80 && seekandroidValue<80)
        {
            Toast.makeText(this@MainActivity, "« Vous êtes excellent en Flutter" , Toast.LENGTH_SHORT).show()
        }
        else if(seekandroidValue <= 30 && seekiosValue <= 30 && seekflutterValue <= 30)
        {
            Toast.makeText(this@MainActivity, "« Vous devez travailler vos skills " , Toast.LENGTH_SHORT).show()
        }
        else
        {
            Toast.makeText(this@MainActivity, "« Vous avez de bons skills !» " , Toast.LENGTH_SHORT).show()

        }
    }
    /////
    private fun GetValueSeekBar() {
        val SeekBarAndroid = findViewById<SeekBar>(R.id.seekBarAndroid)
        val SeekBarIOS: SeekBar = findViewById(R.id.seekBarios)
        val SeekBarFlutter: SeekBar = findViewById(R.id.seekBarFlutter)

        SeekBarAndroid?.setOnSeekBarChangeListener(object :
            SeekBar.OnSeekBarChangeListener {
            override fun onProgressChanged(
                seek: SeekBar,
                progress: Int, fromUser: Boolean
            ) {
            }
            override fun onStartTrackingTouch(seek: SeekBar) {
            }
            override fun onStopTrackingTouch(seek: SeekBar) {
                seekandroidValue = seek.progress
            }
        })
        SeekBarIOS?.setOnSeekBarChangeListener(object :
            SeekBar.OnSeekBarChangeListener {
            override fun onProgressChanged(
                seek: SeekBar,
                progress: Int, fromUser: Boolean
            ) {
            }
            override fun onStartTrackingTouch(seek: SeekBar) {
            }
            override fun onStopTrackingTouch(seek: SeekBar) {
                seekiosValue = seek.progress
            }
        })
        SeekBarFlutter?.setOnSeekBarChangeListener(object :
            SeekBar.OnSeekBarChangeListener {
            override fun onProgressChanged(
                seek: SeekBar,
                progress: Int, fromUser: Boolean
            ) {
            }
            override fun onStartTrackingTouch(seek: SeekBar) {
            }
            override fun onStopTrackingTouch(seek: SeekBar) {
                seekflutterValue = seek.progress
            }
        })

    }
    ////
    private fun isEmailValid(email: String): Boolean {
        return !TextUtils.isEmpty(email) && EMAIL_ADDRESS.matcher(email).matches()
    }
}