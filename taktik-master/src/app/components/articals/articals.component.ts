import { Component } from '@angular/core';
import { ArticalComponent } from '../artical/artical.component';
import { CommonModule } from '@angular/common';

export interface Artiacls {
  id: string | number
  title: string
  desc: string
  img: string
}

@Component({
  selector: 'app-articals',
  templateUrl: './articals.component.html',
  styleUrls: ['./articals.component.css'],
  standalone: true,
  imports: [
    ArticalComponent,
    CommonModule
  ]
})
export class ArticalsComponent {
  data: Artiacls[] = [{
    id: 0,
    title: "التقنيات",
    desc: "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات .",
    img: "../../../assets/images/laptop.jpg"
  },{
    id: 1,
    title: "الوظائف",
    desc: `
    لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات .
    `,
    img: "../../../assets/images/skyscrapers-ga13706de2_1920.jpg"
  }]
}
