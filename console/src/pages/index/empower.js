import React from 'react';
import { Upload, Modal, message} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import cookie from 'react-cookies'
// import { Switch, Route, Redirect } from 'react-router-dom';
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function beforeUpload(file) {
    const isJpgOrPng = true// file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 10000;
    if (!isLt2M) {
        message.error('Image must smaller than 5MB!');
    }
    return isJpgOrPng && isLt2M;
}
class Rmpower extends React.Component {
    state = {
        login_state: false,
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: []
    }
    componentWillMount = () => {
        // this.setState({ loading: true })
    }
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        console.log(file)
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const props = {
            previewFile(file) {
                console.log('Your upload file:', file);
                // Your process logic. Here we just mock to the same file
                return fetch('https://www.wanglijian.top/v2/v3/user/upload', {
                    method: 'POST',
                    body: file,
                })
                    .then(res => res.json())
                    .then(({ thumbnail }) => thumbnail);
            },
        };
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Upload
                    action="https://www.wanglijian.top/v2/v3/user/upload"
                    listType="picture-card"
                    headers={{'token': cookie.load('token')}}
                    beforeUpload={beforeUpload}
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 1000 ? null : uploadButton}
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}
export default Rmpower;
