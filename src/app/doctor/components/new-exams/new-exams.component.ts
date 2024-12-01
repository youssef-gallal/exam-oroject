import { Component, OnInit } from '@angular/core';
import { MatrialModule } from '../../../shared/matrial.module';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-new-exams',
  standalone: true,
  imports: [MatrialModule, ReactiveFormsModule],
  templateUrl: './new-exams.component.html',
  styleUrl: './new-exams.component.css'
})
export class NewExamsComponent implements OnInit {
  [x: string]: any;
  name = new FormControl("");
  questionform!: FormGroup
  question: any[] = [];
  correctnum: any;
  subjectName: any;
  stepperindex = 0
  startAdd: boolean = false;
  preview: boolean = false;
  id: any

  constructor(private fb: FormBuilder, private services: DoctorService) { }
  ngOnInit(): void {
    this.createform()
  }


  createform() {

    this.questionform = this.fb.group({

      question: ["", Validators.required],
      answer1: ["", Validators.required],
      answer2: ["", Validators.required],
      answer3: ["", Validators.required],
      answer4: ["", Validators.required]
    })
  }

  createquestion() {
    if (this.correctnum) {
      const model = {
        question: this.questionform.value.question,
        answer1: this.questionform.value.answer1,
        answer2: this.questionform.value.answer2,
        answer3: this.questionform.value.answer3,
        answer4: this.questionform.value.answer4,
        correctanswer: this.questionform.value[this.correctnum]
      }
      this.question.push(model)
      this.questionform.reset()
    } else { alert("put the write answer ") }
    console.log(this.question)

  }

  start() {
    if (this.name.value == "") {
      alert("shoud enter the name of the langue")
    } else {
      this.startAdd = true
      this.subjectName = this.name.value
    } if (this.startAdd) { this.stepperindex = 1 }
  }


  clearform() {
    this.questionform.reset()

  }
  cancel() {
    this.questionform.reset()
    this.question = []
    this.subjectName = ""
    this.name.reset()
    this.stepperindex = 0
    this.startAdd = false
  }


  getcorrectanswer(event: any) {
    this.correctnum = event.value
    console.log(event.value)
  }
  submit() {
    const model = {
      name: this.subjectName,
      questions: this.question

    }
    return this.services.getsubjects(model).subscribe((res: any) => {
      this.preview = true
      this.id = res.id
    })
    if (this.preview) {
      this.stepperindex = 2
    }
  }


  // dellete(index: number) {
  //   this.question.slice(index, 1)

  //   const model = {
  //     name: this.subjectName,
  //     questions: this.question
  //   }
  //   this.services.ubdatesubjects(model, this.id).subscribe(res => { alert("success") })
  // }
  delete(index: number) { }
}