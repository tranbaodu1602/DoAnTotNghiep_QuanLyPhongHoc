// import React from 'react'
import NavBar from '../../../components/NavBar/NavBar';
import { Breadcrumb, Card, List } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import './thongBao.scss';

export const Thongbao = () => {
    const data = [
        {
            title: 'Thông báo 1',
            description: 'Mô tả cho Card 1 aaaaaaaaaaaaaaaaaaaaaa',
            time: '20/03/2023',
        },
        {
            title: 'Thoogn báo 2',
            description: 'Mô tả cho Card 2 aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            time: '20/03/2023',
        },
        {
            title: 'Thông báo 3',
            description: 'Mô tả cho Card 3',
            time: '20/03/2023',
        },
    ];
    return (
        <>
            <NavBar />
            <div className="notify-component">
                <div className="breadcrumb-notify">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link
                                style={{
                                    fontSize: 16 + 'px',
                                    textDecoration: 'none',
                                    color: 'rgba(0, 0, 0, 0.88)',
                                    fontWeight: 'normal',
                                }}
                                to="/home"
                            >
                                Trang Chủ
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link
                                style={{
                                    fontSize: 16 + 'px',
                                    textDecoration: 'none',
                                    color: 'rgba(0, 0, 0, 0.88)',
                                    fontWeight: 'normal',
                                }}
                                to="/home/thongbao"
                            >
                                Thông Báo
                            </Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div className="notify-list">
                    <Card className="card" title="THÔNG TIN GIỜ HỌC" style={{ color: '#737373' }}>
                        <List
                            grid={{ gutter: 16, column: 1 }} // Thiết lập cấu trúc danh sách (3 cột)
                            dataSource={data} // Danh sách dữ liệu
                            renderItem={(item) => (
                                <List.Item>
                                    <div className='item'>
                                        <Link to={`/home/thongbao/${item.title}`}>
                                            <Card title={item.title}>
                                                <p>{item.description}</p>
                                            </Card>
                                        </Link>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Card>
                    <Card className="card" title="THÔNG TIN SỰ KIỆN" style={{ color: '#737373', marginTop: 2 + '%' }}>
                        <List
                            grid={{ gutter: 16, column: 1 }} // Thiết lập cấu trúc danh sách (3 cột)
                            dataSource={data} // Danh sách dữ liệu
                            renderItem={(item, key) => (
                                <List.Item>
                                    <div className='item'>
                                        <Link to={`/home/thongbao/${item.title}`}>
                                            <Card key={key} title={item.title}>
                                                <p>{item.description}</p>
                                            </Card>
                                        </Link>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
};
