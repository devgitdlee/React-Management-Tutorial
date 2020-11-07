import React from "react";
import {post} from 'axios';

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        }
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData;
        formData.append('image', this.state.file);
        formData.append('userName', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        //파일 포함되어있는 데이터를 서버로 보낼때 설정
        const config ={
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }
    handleFormSumbit = (e) =>{
        e.preventDefault()
        this.addCustomer()
            .then((response) =>{
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        })

    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
    }

    render(){
        return (
            <form onSubmit={this.handleFormSumbit}>
                <h1>고객 추가</h1>
                프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
                이름: <input type="text" placeholder="유저명" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
                생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>
                직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;
