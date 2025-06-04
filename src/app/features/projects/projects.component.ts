import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {

  @ViewChild('carousel') carousel!: ElementRef;

  cards: any[] = [
    {
      title: 'Sistema web de gestión de planillas | Grupo Progresando Todos',
      description: 'Sistema desarrollado con Laravel, Angular y MySQL para automatizar planillas quincenales y generar reportes por sede, reduciendo tiempos de procesamiento y mejorando la gestión de desembolsos.',
      imageUrl: 'images/projects/Planillas_.PNG',
      icons: ['icons/angular.svg', 'icons/laravel.svg', 'icons/mysql.svg'],
      links: [
        { url: 'https://github.com/karla-h/sistema-planillas', icon: 'icons/github.svg' }
      ]
    },    
    {
      title: 'Sistema web de gestión de reservas | Hotel VanGogh ',
      description: 'Panel administrativo desarrollado con Spring Boot y Angular para optimizar la gestión de reservas. El proyecto permitió reducir el tiempo de registro de reservas y minimizar errores en la disponibilidad de habitaciones, mejorando la eficiencia operativa del hotel.',
      imageUrl: 'images/projects/ReservasHotel.jpg',
      icons: ['icons/angular.svg', 'icons/spring-boot.svg','icons/postgresql.svg'],
      links: [
        { url: 'https://github.com/karla-h/hotel-frontend', icon: 'icons/github.svg'}
      ]
    },
    {
      title: 'Aplicación móvil de gestión de citas | Barbería Style',
      description: 'Aplicación móvil creada con Flutter que facilita la gestión de citas y servicios. Incluye un dashboard para analizar citas realizadas y servicios más solicitados, ayudando a optimizar procesos y mejorar la experiencia del cliente.',
      imageUrl: 'images/projects/BarberiaStyle.jpg',
      icons: ['icons/flutter.svg', 'icons/dart.svg','icons/firebase.svg'],
      links: [
        { url: 'https://github.com/karla-h/baberia', icon: 'icons/github.svg'}
      ]
    },
    {
      title: 'Sistema de gestión de citas | Clínica San José',
      description: 'Sistema de escritorio diseñado para gestionar citas de pacientes. El sistema mejoró la organización en la atención médica y redujo significativamente el tiempo necesario para registrar citas, optimizando el flujo de trabajo.',
      imageUrl: 'images/projects/ClinicaSanJose.PNG',
      icons: ['icons/java.svg', 'icons/mysql.svg'],
      links: [
        { url: 'https://github.com/karla-h/clinica-san-jose', icon: 'icons/github.svg'}
      ]
    },
    {
      title: 'Sistema punto de venta',
      description: 'Sistema web desarrollado con Laravel que facilita el control de las ventas y automatiza el control del inventario.',
      imageUrl: 'images/projects/PuntodeVenta.PNG',
      icons: ['icons/laravel.svg','icons/php.svg','icons/mysql.svg'],
      links: [
        { url: 'https://github.com/karla-h/punto-de-venta', icon: 'icons/github.svg'}
      ]
    },
    {
      title: 'Business Intelligence | Transportes Virgen de la Puerta',
      description: 'Proyecto de análisis de datos utilizando Azure para el proceso ETL y Power BI para la visualización de datos. Los dashboards generados permitieron a la empresa identificar tendencias de demanda de pasajes y optimizar su toma de decisiones.',
      imageUrl: 'images/projects/DashboardTransportes.jpg',
      icons: ['icons/powerbi.svg', 'icons/azure.svg','icons/sqlserver.svg'],
      links: [
        { url: 'https://github.com/usuario/proyecto3', icon: 'icons/github.svg'}
      ]
    }
  ];

  ngAfterViewInit() {}

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
