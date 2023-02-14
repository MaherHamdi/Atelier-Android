package com.example.curriculumvitaev2

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class ResumePage : AppCompatActivity() {
    private lateinit var fNameText: TextView
    private lateinit var emailText: TextView
    private lateinit var ageText: TextView
    private lateinit var genderText: TextView
    private lateinit var AndroidSkillText: TextView
    private lateinit var IosSkillText: TextView
    private lateinit var FlutterSkillText: TextView
    private lateinit var LanguagesText: TextView
    private lateinit var HobbiesText: TextView






    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_resume_page)

        fNameText = findViewById(R.id.nameText)
        emailText = findViewById(R.id.emailText)
        ageText = findViewById(R.id.ageText)
        genderText = findViewById(R.id.genderText)
        AndroidSkillText = findViewById(R.id.AndroidSkillText)
        IosSkillText = findViewById(R.id.IosSkillText)
        FlutterSkillText = findViewById(R.id.FlutterSkillText)
        LanguagesText = findViewById(R.id.LanguagesText)
        HobbiesText = findViewById(R.id.HobbiesText)

        val firstname = intent.getStringExtra("firstname")
        val email = intent.getStringExtra("email")
        val gender = intent.getStringExtra("gender")
        val age = intent.getIntExtra("age",0).toString()
        val scores = intent.getStringExtra("scores")
        val checkedLanguages = intent.getSerializableExtra("checkedLanguages")
        //val checkedHobbies = intent.get("checkedHobbies")
        val checkedHobbies = intent.getSerializableExtra("checkedHobbies")


        fNameText.text =  "Name: " + firstname
        emailText.text = "Email: " + email
        genderText.text = "Gender: " + gender
        ageText.text = "age: " + age
        AndroidSkillText.text = "scores: " + scores
        LanguagesText.text = "languages: " + checkedLanguages
        HobbiesText.text = "hobbies: " + checkedHobbies
    }
}