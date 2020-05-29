import { Component, OnInit } from '@angular/core';
import { LinkListService } from 'src/app/service/link-list.service';

@Component({
  selector: 'app-link-lit',
  templateUrl: './link-lit.component.html',
  styleUrls: ['./link-lit.component.scss'],
  providers:[LinkListService]
})
export class LinkLitComponent implements OnInit {
  string_inserted_in_nodes: string;
public append_input:any;
  updating_position: any;
  delete_position: number;
  insert_element: any;
  inser_position: any;
  constructor(
    public linklist:LinkListService
  ) { }
  appendInput(ev){
    this.append_input=ev['detail']['value']
  }
  appendData(){
    if( this.append_input){
      this.linklist.append( this.append_input)

    }

  }
  insertElementValue(ev){
    this.insert_element=ev['detail']['value']
  }
  insertPositionValue(ev){
    this.inser_position=ev['detail']['value']
  }
  insertData(){
    this.linklist.insert(this.insert_element,this.inser_position)
  }
  updateValue(ev){
    this.updating_position=ev['detail']['value']

  }
  updatePositionValue(ev){
    
  }
  updateData(){

  }
  deletePositionEntered(ev){
    this.delete_position=parseInt(ev['detail']['value'])
  }
  deletePosition(){
    this.linklist.removeAt(this.delete_position)
  }
  retrieve(){
    this.string_inserted_in_nodes=this.linklist.toString()

    console.log("To rstring function return value is",this.string_inserted_in_nodes)
  }
  ngOnInit() {
    // console.log("this.linkList",this.linklist)

    // this.linklist.append('abc')
    // this.linklist.append('rt')
    // this.string_inserted_in_nodes=this.linklist.toString()

    // console.log("To rstring function return value is",this.string_inserted_in_nodes)
  }

}
