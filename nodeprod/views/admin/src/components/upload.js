import React from 'react';

import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './index.less';
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
export default class PicturesWall extends React.Component {
        state = {
            data:[],
        };
        getdata=(d)=>{
            console.log(d)
        }
    render() {
        return (
            <div className="clearfix">
                <M_Upload  data={{
                        fileLength: 1, fileList: [
                            {
                                uid: '-1',
                                name: 'image.png',
                                status: 'done',
                                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                            },
                            {
                                uid: '-2',
                                name: 'image.png',
                                status: 'done',
                                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                            },
                            {
                                uid: '-3',
                                name: 'image.png',
                                status: 'done',
                                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                            },
                            {
                                uid: '-4',
                                name: 'image.png',
                                status: 'done',
                                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                            },
                            {
                                uid: '-5',
                                name: 'image.png',
                                status: 'error',
                            },
                        ]
                    }}
                    getdata={this.getdata}
                    />
            </div>
        );
    }
}
 class M_Upload extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileLength:this.props.data.fileLength,
            fileList: this.props.data.fileList,
        };
    }
    handleCancel = () => this.setState({ previewVisible: false });
    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = (info) => {
        console.log(info)
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            this.setState({ fileList: info.fileList })
            this.props.getdata(this.state.fileList)
            // return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );

        }


    }
    onRemove = file => {
        const { fileList } = this.state;
        fileList.map((item, index) => {
            if (item.uid == file.uid) {
                delete fileList[fileList.splice(index, 1)]
                this.setState({ fileList })
                this.props.getdata(this.state.fileList)
            }
        })
        return true
    };
    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    beforeUpload={beforeUpload}
                    onRemove={this.onRemove}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}

