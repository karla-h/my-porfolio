import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    {
      title: "Lenguajes de Programación",
      icons: ["java.svg", "php.svg", "dart.svg", "js.svg"]
    },
    {
      title: "Frameworks",
      icons: ["angular.svg", "laravel.svg", "spring-boot.svg", "flutter.svg"]
    },
    {
      title: "Bases de Datos",
      icons: ["sqlserver.svg", "mysql.svg", "postgresql.svg", "firebase.svg"]
    },
    {
      title: "Herramientas",
      icons: ["git.svg", "github.svg", "vscode.svg", "android.svg", "postman.svg"]
    }
  ];
}
