<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> API 管理</el-breadcrumb-item>
                <el-breadcrumb-item>  </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-button  type="primary"  @click="addApi">新增API</el-button>
        <el-table :data="apiList" border style="width: 100%">
            <el-table-column prop="name" label="ApiName" width="200">
            </el-table-column>
            <el-table-column prop="host" label="X-Host" width="200">
            </el-table-column>
            <el-table-column prop="upstream_url" label="Upstream_Url" >
            </el-table-column>

            <el-table-column label="操作" width="280">
                <template scope="scope">
                    <el-button size="small"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    <el-button size="small" type="info"   @click="handleDelete(scope.$index, scope.row)">插件</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                apiList: []
            }
        },
        methods: {
            addApi(){
                const self = this;
                self.$router.push('/api-add');
            },
            handleEdit(index, row) {

                this.$message(information);
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            }
        },
        beforeMount(){
            axios.get('/api/list').then( (res) => { this.apiList = res.data.list;   })
//            alert(this.information)
        }
    }
</script>
