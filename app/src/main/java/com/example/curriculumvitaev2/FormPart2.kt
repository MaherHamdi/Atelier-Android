package com.example.curriculumvitaev2

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.CheckBox
import android.widget.SeekBar

class FormPart2 : AppCompatActivity() {
    private lateinit var androidSk: SeekBar
    private lateinit var iosSk: SeekBar
    private lateinit var flutterSk: SeekBar

    private lateinit var arabicChbx: CheckBox
    private lateinit var frenchChbx: CheckBox
    private lateinit var englishChbx: CheckBox

    private lateinit var musicChbx: CheckBox
    private lateinit var sportChbx: CheckBox
    private lateinit var gamesChbx: CheckBox

    private lateinit var submitBtn: Button





    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_form_part2)

        supportActionBar?.title = resources.getString(R.string.title1)

        androidSk = findViewById(R.id.andrSkBar)
        iosSk = findViewById(R.id.iosSkBar)
        flutterSk = findViewById(R.id.fltrSkBar)

        arabicChbx = findViewById(R.id.ar)
        frenchChbx = findViewById(R.id.fr)
        englishChbx = findViewById(R.id.en)

        musicChbx = findViewById(R.id.music)
        sportChbx = findViewById(R.id.sport)
        gamesChbx = findViewById(R.id.games)

        submitBtn = findViewById(R.id.submitBtn)

        submitBtn.setOnClickListener {

            val firstname = intent.getStringExtra("firstname")
            val email = intent.getStringExtra("email")
            val gender = intent.getStringExtra("gender")
            val age = intent.getIntExtra("age",0)

            val scores = hashMapOf(
                Pair("Android", androidSk.progress),
                Pair("Ios", iosSk.progress),
                Pair("Flutter", flutterSk.progress)
            )

            val checkedLanguages =
                hashMapOf(
                    Pair("English", englishChbx.isChecked),
                    Pair("Arabic", arabicChbx.isChecked),
                    Pair("French", frenchChbx.isChecked)
                )

            val checkedHobbies =
                hashMapOf(
                    Pair("Games", gamesChbx.isChecked),
                    Pair("Sport", sportChbx.isChecked),
                    Pair("Music", musicChbx.isChecked)
                )
            Intent(this, ResumePage::class.java).let { i ->
                i.putExtra("firstname", firstname)
                i.putExtra("email", email)
                i.putExtra("gender", gender)
                i.putExtra("age", age)
                i.putExtra("scores", scores)
                i.putExtra("checkedLanguages", checkedLanguages)
                i.putExtra("checkedHobbies", checkedHobbies)




                startActivity(i)
            }

        }
    }
}