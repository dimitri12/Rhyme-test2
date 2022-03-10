import { Injectable } from '@nestjs/common';
import { article } from './interfaces/article.interface';
const fs = require('fs');

@Injectable()
export class AppService {
  getHello(): article {
    try {
      let data = fs.readFileSync('src/article.json');
      let article: article = JSON.parse(data);
      return article;
    } catch (error) {
      console.log(error);
    }
  }
  postHello(data: article): void {
    try {
      let articleData = fs.readFileSync('src/article.json');

      let articledata = JSON.parse(articleData);
      
     // articledata = [articledata];
     /* */
     //let a1= articledata[0]
  
     let a2 = articledata
  
     //a2.push(articledata[0][1])

      let result = a2.map((a) => a.id);
      a2.push(data);
      
      
      for(let i =0;i<a2.length;i++){
        a2[i].id = i.toString()
      }

      fs.writeFileSync('src/article.json', JSON.stringify(a2));
    } catch (error) {
      console.log(error);
    }
  }
  putHello(data:any, body:any): void {

    try {
      let articleData = fs.readFileSync('src/article.json');

      let articledata = JSON.parse(articleData);
      let a1;
      a1=articledata.find(x=>x.id ==data)
      a1.body = body.text
      articledata=articledata.filter(x=>x.id !==data)
      articledata.push(a1)
      fs.writeFileSync('src/article.json', JSON.stringify(articledata));
    } catch (error) {
      console.log(error);
    }
  }
  deleteHello(data:any): void {
    try {
      let articleData = fs.readFileSync('src/article.json');

      let articledata = JSON.parse(articleData);
      
      articledata=articledata.filter(x=>x.id !==data)
      fs.writeFileSync('src/article.json', JSON.stringify(articledata));
    } catch (error) {
      console.log(error);
    }
  }
}
