<template>
<!-- 아직 짤리는거 수정 못했어요 -->
  <div>
    <v-container>
      <v-btn id="dwn-btn">pdf 테스트</v-btn>
        <v-row cols="12">
          <v-col md="8" id="pdf_wrap">
            <v-container fluid grid-list-sm pa-5>
              <h2>제목</h2>
              <v-divider></v-divider>
              <br>
              <h3>[목차1]</h3>
              <br>
        <div>
        흔히 트렌드란 뭔가 재빠르게 세상을 따라가고, 핫플레이스를 좋아하는 패피들로 연상됩니다. 하지만 저는 트렌드를, 팀원과의 소통에 관한 관점으로 얘기해보려 합니다. 트렌드는 어떠한 방향으로 쏠리는 사회적 추세, 경향을 뜻합니다. 소통은 사회성, 사람들과의 커뮤니케이션 활동입니다. 트렌드와 소통을 같은 선상에 놓고 비교하면, 트렌드는 앞서 나가는 멋진 사람에 대한 좁은 정의 뿐만 아니라, 사람(팀원)들이 자주 사용하는 언어와 행동, 도구를 파악하는 넓은 의미로도 비춰질 수 있습니다. 사람들과 더 잘 대화하고 함께 가기 위해 그들의 행동과 방향성을 읽고 공감하며, 그들의 언어로 대화를 나누는 것도 트렌드를 읽는 것입니다.
          팀원과의 소통을 위한 트렌드 읽기는, 끊임없는 배움으로 이어집니다. 우리는 각자 다른 관점과, 스킬, 방향성을 가진 팀원들과 만납니다. 직군마다 다양한 마이크로 트렌드가 있습니다. 기획자로 예를 들면, PPT, XD, Figma, Axure, Sketch, Power mockup, Notion, SQL, R, Python, Amplitude, GA 등 업무에 대한 다양한 트렌드를 볼 수 있습니다. 팀원들의 수많은 트렌드, 관점을 읽고 함께 `공감`하기 위해서는 지속적으로 새로운 지식에 대한 배움을 이어가야 합니다.
          배움과 소통의 관계는 업무/협업툴에서 가장 직접적으로 드러납니다. 피그마와 제플린을 사용하지 못하는 기획자와 디자이너, 개발자의 소통은 얼마나 힘들까요? 당장의 프로젝트에는 영향을 미치지 않는다는 이유로 통일된 기획툴을 사용하지 않고, 각기 다른 익숙한 툴로 기획서를 작성하는 팀의 기획 시스템과 히스토리 관리는 어떻게 안정될 수 있을까요? 디자인과 개발, 기획 등 서로의 분야에 대한 기본적인 관심조차 없는, 혹은 고객에 대한 관심이 없는 팀원과의 대화는 얼마나 괴로울까요? 데이터를 추출할 수 없어서 매번 개발자에게 부탁해야 하는 마케터/기획자/디자이너의 마음은 얼마나 무겁고, 개발자의 고충은 어떠할까요
          길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ
          길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ
          길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ
          길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ길이테스트이양아ㅏ아아ㅏㅏ아아ㅏ
        <v-img src="../assets/partership.jpg"></v-img>
        </div>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>
<script>
import $ from 'jquery';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
export default {
  data(){
    return{
      drawer:false
    }
  },
  mounted(){
    
     $('#dwn-btn').click(function() {
  //pdf_wrap을 canvas객체로 변환
  html2canvas($('#pdf_wrap')[0]).then(function(canvas) {
    var doc = new jsPDF('p', 'mm', 'a4'); //jspdf객체 생성
    var imgData = canvas.toDataURL('image/png'); //캔버스를 이미지로 변환
    var imgWidth = 210; var pageHeight = 295; 
    var imgHeight = canvas.height * imgWidth / canvas.width; 
    var heightLeft = imgHeight; 
    var position = 0; doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight); heightLeft -= pageHeight; 
    while (heightLeft >= 0) {
       position = heightLeft - imgHeight; doc.addPage(); 
       doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight); 
       heightLeft -= pageHeight; 
       }

    var date = new Date().toLocaleString();
  //  var title = document.getElementById("title").innerText
    doc.save(`테스트_${date}.pdf`); //pdf저장
  });
});

 
  },
}
</script>