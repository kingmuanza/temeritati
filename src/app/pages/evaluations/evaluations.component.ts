import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit {

  client = '1';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  resumee() {
    this.router.navigate(['evaluations', 'resume']);
  }

}
