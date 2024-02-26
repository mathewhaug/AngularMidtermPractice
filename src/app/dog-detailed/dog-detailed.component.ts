import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogInfo } from '../models/dog-info';
import { DogServiceService } from '../services/dog-service.service';

@Component({
  selector: 'app-dog-detailed',
  templateUrl: './dog-detailed.component.html',
  styleUrls: ['./dog-detailed.component.scss']
})
export class DogDetailedComponent implements OnInit{

  
  content?: DogInfo;
  foundContent: DogInfo;

  constructor(
    private router: Router,
    private dogservice: DogServiceService,
    private route: ActivatedRoute
  ) {
    this.foundContent = { id: 0, dogName: '', ownerName: '', amountDue: 0, hadFun: true};


  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: number = 0;
      id = +(params.get('id') ?? 1);
  
      this.dogservice.getContentByName("dogName").subscribe((singleDetailItem: DogInfo[]) => {
        console.log("TESTING", singleDetailItem);
  
        if(singleDetailItem.length){
          this.content = singleDetailItem[0];
          console.log("TESTING ", this.content);
        } else {
          console.log("Item not found");
          this.router.navigate(["/contentNotFound"]);
        }
      });
    });
  }

}
