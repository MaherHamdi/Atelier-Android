package com.example.curriculumvitaev2

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Patterns
import android.view.inputmethod.EditorInfo
import android.widget.*
import com.google.android.material.internal.ViewUtils.hideKeyboard
import com.google.android.material.textfield.TextInputLayout

class HomeActivity : AppCompatActivity() {
    private lateinit var fNameTextLayout: TextInputLayout
    private lateinit var emailTextLayout: TextInputLayout
    private lateinit var ageTextLayout: TextInputLayout
    private lateinit var radioGroup: RadioGroup
    private lateinit var checkedRadioButton: RadioButton
    private lateinit var nextBtn: Button
    private lateinit var layoutTitle: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)
        fNameTextLayout = findViewById(R.id.fullNameTxtInput)
        emailTextLayout = findViewById(R.id.emailTxtInput)
        ageTextLayout = findViewById(R.id.ageTxtInput)
        layoutTitle = findViewById(R.id.layoutTitle)

        radioGroup = findViewById(R.id.radioGroup)
        nextBtn = findViewById(R.id.nxtBtn)
        val inputLayouts = mutableListOf(
            fNameTextLayout, emailTextLayout, ageTextLayout
        )

        val inputs = inputLayouts.map { t -> t.editText }


        val ageInput = inputs.first { it?.id == R.id.ageInput }
        val emailInput = inputs.first { it?.id == R.id.emailInput }

        // Event listeners

        nextBtn.setOnClickListener {
            val checkedID: Int = radioGroup.checkedRadioButtonId

            when {


                !Patterns.EMAIL_ADDRESS.matcher(emailInput!!.text.toString()).matches() -> {
                    emailTextLayout.apply {
                        isErrorEnabled = true
                        error = "Invalid email !"
                    }
                }

                inputs.any { it?.text?.isBlank()!! } -> {
                    inputLayouts.forEach {
                        if (it.editText?.text?.isBlank()!!) {
                            it.apply {
                                isErrorEnabled = true
                                when (id) {
                                    R.id.fullNameTxtInput -> it.error =
                                        "Full name cant be empty !"
                                    R.id.emailTxtInput -> it.error = "Email  cant be empty !"
                                    R.id.ageTxtInput -> it.error = "Age cant be empty !"
                                }
                            }
                        }
                    }
                }

                else -> {
                    inputLayouts.filter { it.isErrorEnabled }.forEach {
                        it.apply {
                            isErrorEnabled = false;
                            error = ""
                        }
                    }
                    checkedRadioButton = findViewById(checkedID)
                    layoutTitle .setTextColor(resources.getColor(R.color.colorPrimaryDark))




                    startActivity( Intent(this, FormPart2::class.java)
                        .putExtra("email",emailTextLayout.editText?.text.toString())
                        .putExtra("firstname", fNameTextLayout.editText?.text.toString())
                        .putExtra("gender",checkedRadioButton.text.toString())
                        .putExtra("age",Integer.parseInt(ageTextLayout.editText?.text.toString()))

                            )



                }
            }
        }
        }
    }
