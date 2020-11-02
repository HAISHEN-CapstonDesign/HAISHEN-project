<template>
    <v-app>
        <!--업로드 이미지-->
        <v-img
        v-if="imageUrl" :src="imageUrl"
        max-height="200"
        max-width="100%"
        ></v-img>
        <!--기본 이미지-->
        <v-img
        v-else
        max-height="200"
        max-width="100%"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
    <br>
    <v-container style="width: 60%;">
    <v-layout column wrap>
        <v-flex>
            <v-row>
                <v-col cols="6" md="4">
                    <p style="font-size:20px" class="text-center">프로젝트 주제</p>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                    <v-text-field
                    label="프로젝트 주제"
                    :rules="rules"
                    counter="100"
                    outlined
                    v-model="title"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col cols="6" md="4">
                    <p style="font-size:20px" class="text-center">프로젝트 tag</p>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                    <v-autocomplete
                    v-model="tags"
                    :items="items"
                    hide-selected
                    outlined
                    label="Add some tags"
                    multiple
                    small-chips
                    >
                    </v-autocomplete>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col cols="6" md="4">
                    <p style="font-size:20px" class="text-center">프로젝트 설명</p>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                    <v-textarea
                    counter="1000"
                    outlined
                    label="프로젝트 설명"
                    :rules="area_rules"
                    v-model="intro"
                    ></v-textarea>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col cols="6" md="4">
                    <p style="font-size:20px" class="text-center">배너 이미지 </p>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                    <input ref="imageInput" type="file" hidden @change="onChangeImages">
                    <v-btn type="button" @click="onClickImageUpload">이미지 업로드</v-btn>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col cols="6" md="4">
                    <p style="font-size:20px" class="text-center">모집 인원</p>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                    <v-radio-group
                    v-model="num_radios"
                    :mandatory="false"
                    >
                        <v-radio
                        label="개인"
                        value="radio-1"
                        ></v-radio>
                        <v-radio
                        label="팀"
                        value="radio-2"
                        ></v-radio>
                    </v-radio-group>
                    <v-text-field
                        v-model="member_num"
                        v-show="num_radios == 'radio-2'"
                        type="number"
                        label="인원 수"
                        min="2"
                        max="10"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col cols="6" md="4">
                    <p style="font-size:20px" class="text-center">목표 펀딩 금액 </p>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                    <v-radio-group
                    v-model="funding_radios"
                    :mandatory="false"
                    >
                        <v-radio
                        label="펀딩 등록 안함"
                        value="radio-1"
                        ></v-radio>
                        <v-radio
                        label="펀딩 등록하기"
                        value="radio-2"
                        ></v-radio>
                    </v-radio-group>
                    <v-text-field
                    label="목표 펀딩 금액"
                    suffix="원"
                    v-show="funding_radios == 'radio-2'"
                    v-model="target_funding_money"
                    type="number"
                    style="width:35%"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-flex>
        <v-flex>
            <v-row>
                <v-col cols="6" md="4">
                    <p style="font-size:20px" class="text-center">목표 작업 기한 </p>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                    <v-radio-group
                    v-model="deadline_radios"
                    :mandatory="false"
                    >
                        <v-radio
                        label="무기한"
                        value="radio-1"
                        ></v-radio>
                        <v-radio
                        label="기한 있음"
                        value="radio-2"
                        ></v-radio>
                    </v-radio-group>
                    <div v-show="deadline_radios == 'radio-2'">
                        <v-date-picker
                            v-model="date"
                            full-width
                            class="mt-4"
                        ></v-date-picker>
                    </div>
                </v-col>
            </v-row>
        </v-flex>
        <br>
        <v-flex>
            <div class="text-center">
            <v-btn
            @click="createProject()"
            >
            프로젝트 등록하기</v-btn>
            </div>
        </v-flex>
    </v-layout>
    </v-container>
    </v-app>
</template>

<script>
import axios from 'axios'; // eslint-disable-line no-unused-vars

export default {
    name: 'projectStart',
    components: {

    },

    data() {
        return{
            items: ['여행', '수학', '과학', 'IT', '요리','건강','역사','건축','문화,예술'],
            rules: [v => v.length <= 100 || 'Max 100 characters'],
            area_rules: [v => v.length <= 1000 || 'Max 1000 characters'],
            tags:[],
            search: null,
            num_radios: 'radio-1',
            deadline_radios: 'radio-1',
            funding_radios: 'radio-1',
            date: new Date().toISOString().substr(0, 10),
            imageUrl: null,
            title: '',
            intro: '',
            member_num: '1',
            target_funding_money: 0,
        }
    },
    methods: {
        onClickImageUpload() {
            this.$refs.imageInput.click();
        },
        onChangeImages(e) {
            console.log(e.target.files)
            const file = e.target.files[0];
            this.imageUrl = URL.createObjectURL(file);
        },
        
        createProject(){
            /*
            var data = {
                title: this.title,
                introduction: this.intro,
                image: this.imageUrl,
                //add tag or genre
                mwn: this.member_num,
               // target_d-day: this.date, //d-day -> d_day
                target_funding_money: this.target_funding_money,              
            }
            axios.post('/api/project/startup', data)
                .then(res => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                });
                */
            this.$router.push('/CollaboProjMain');
        }
    },

}
/*

내 프로필 항목
data - profile_radios: 'radio-1',
            my: {
                tag: ['여행', '요리'],
                career: '대충 이력 내용'
            },
<v-flex>
            <v-row>
                <v-col cols="6" md="4">
                    <p style="font-size:20px" class="text-center">내 프로필 </p>
                </v-col>
                <v-col cols="12" sm="6" md="8">
                    <v-radio-group
                    v-model="profile_radios"
                    :mandatory="false"
                    >
                        <v-radio
                        label="My페이지에서 가져오기"
                        value="radio-1"
                        ></v-radio>
                        <v-radio
                        label="새로 작성하기"
                        value="radio-2"
                        ></v-radio>
                    </v-radio-group>
                    <v-autocomplete
                    v-model="my.tag"
                    :items="items"
                    :disabled="profile_radios == 'radio-1'"
                    outlined
                    dense
                    chips
                    small-chips
                    label="관심분야"
                    multiple
                    ></v-autocomplete>
                    <v-textarea
                    label="이력"
                    v-model="my.career"
                    :disabled="profile_radios == 'radio-1'"
                    outlined
                    ></v-textarea>
                </v-col>
            </v-row>
        </v-flex>
*/
</script>

        
