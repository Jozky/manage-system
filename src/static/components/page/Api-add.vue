<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> API 管理</el-breadcrumb-item>
                <el-breadcrumb-item> 新增 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label=" API ">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="X-Host">
                    <el-input v-model="form.host"></el-input>
                </el-form-item>
                <el-form-item label="Method">
                    <el-input v-model="form.method"></el-input>
                </el-form-item>
                <el-form-item label="Upstream">
                    <el-input v-model="form.upstream"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data: function(){
            return {
                form: {
                    name: '',
                    host: '',
                    method: '',
                    upstream: ''
                }
            }
        },
        methods: {
            onSubmit() {

                axios
                    .post('/api/post',this.form)
                    .then(res=> {console.log(res)})
                .catch(err=> {console.log(err)})

                this.$message.success('提交成功！'+this.form.name);
            }
        }
    }
</script>
