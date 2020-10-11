<template>
    <v-app>
        <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="200"
        max-width="100%"
        src="https://picsum.photos/id/11/500/300"
        >
    </v-img>
    <br>
    <v-layout column wrap>
        <v-flex>
            <v-row>
                <v-col>
                    <p style="font-size:25px" class="text-center">프로젝트 주제 </p>
                </v-col>
                <v-col>
                    <input v-model="subject" placeholder="최대 100자" style="height:30px">
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col>
                    <p class="text-center" style="font-size:25px">프로젝트 tag </p>
                </v-col>
                <v-col>
                    <Tag></Tag>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col>
                    <p style="font-size:25px" class="text-center">프로젝트 설명 </p>
                </v-col>
                <v-col>
                    <textarea v-model="message" placeholder="최대 1000자"></textarea>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col>
                    <p style="font-size:25px" class="text-center">배너 이미지 </p>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col>
                    <p style="font-size:25px" class="text-center">내 프로필 </p>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col>
                    <p style="font-size:25px" class="text-center">모집 인원 </p>
                </v-col>
                <v-col>
                    <input type="text" v-model="onlyNumber" maxlength="5"/>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col>
                    <p style="font-size:25px" class="text-center">목표 작업 기한 </p>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col>
                    <p style="font-size:25px" class="text-center">목표 펀딩 금액 </p>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <div class="text-center">
            <v-btn
            v-model="fab"
            >
            프로젝트 등록하기</v-btn>
            </div>
        </v-flex>
    </v-layout>
    </v-app>
</template>

<script>
import Tag from '../components/tagPlus'
export default {
    name: 'projectStart',
    components: {
        Tag
    },

    data() {
        return{
            onlyNumber: "",
        }
  },
  watch: {
      onlyNumber : function(){
          return this.onlyNumber = this.onlyNumber.replace(/[^0-9]/g, '');
      }
  },
}
</script>

        