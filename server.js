const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: true}));

app.get('/api/customers', (req, res) =>{
   res.send([
      {
         'id': 1,
         'image': 'https://placeimg.com/64/64/1',
         'name': '홍길동',
         'birthday': '961222',
         'gender': '남자',
         'job': '대학생'
      },{
         'id': 2,
         'image': 'https://placeimg.com/64/64/2',
         'name': '이선빈',
         'birthday': '951223',
         'gender': '여자',
         'job': '프로그래머'
      },{
         'id': 3,
         'image': 'https://placeimg.com/64/64/3',
         'name': '이빈',
         'birthday': '970224',
         'gender': '여자',
         'job': '편집자'
      }

   ]);
});

app.listen(port,()=> console.log(`Listening on port ${port}`));
