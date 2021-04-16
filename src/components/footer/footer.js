import React, { useState } from 'react'
import './footer.scss'
import { Container } from '@material-ui/core';
import Logo from './logo.png'
import Logo1 from '../../image/members/long.jpg'
import Logo2 from '../../image/members/quang.jpg'
import Logo3 from '../../image/members/saral.jpg'


const Footer = () => {

    const [seeMore, setSeeMore] = useState(false)

    return (
        <footer className="footer">
            <Container style={{ backgroundColor: "#FFFFFF" }}>

                <div className="footer__up">

                    <div className="footer__up__element">
                        <a href='https://www.google.com' target='blank'>DV vệ sinh máy lạnh, máy giặt, quạt</a>
                        <a href='https://www.google.com' target='blank'>Lịch sử mua hàng</a>
                        <a href='https://www.google.com' target='blank'>Đăng ký làm đại lý cho TGDĐ</a>
                        <a href='https://www.google.com' target='blank'>Tìm hiểu về mua trả góp</a>
                        <a href='https://www.google.com' target='blank'>Chính sách bảo hành</a>
                        <a href='https://www.google.com' target='blank'>Chính sách đổi trả</a>
                        {!seeMore ? <span onClick={e => setSeeMore(true)}>Show More <i className="fas fa-chevron-down"></i></span> :
                            <>
                                <a href='https://www.google.com' target='blank'>Giao hàng, lắp đặt</a>
                                <a href='https://www.google.com' target='blank'>Hướng dẫn mua online</a>
                                <a href='https://www.google.com' target='blank'>Bán hàng doanh nghiệp</a>
                                <a href='https://www.google.com' target='blank'>Phiếu mua hàng</a>
                                <a href='https://www.google.com' target='blank'>In hóa đơn điện tử</a>
                                <a href='https://www.google.com' target='blank'>Quy chế hoạt động</a>
                                <a href='https://www.google.com' target='blank'>Nội quy cửa hàng</a>
                                <a href='https://www.google.com' target='blank'>Chất lượng phục vụ</a>
                                <a href='https://www.google.com' target='blank'>Cảnh báo giả mạo</a>
                                <a href='https://www.google.com' target='blank'>Thông tin trao thưởng</a>
                                <a href='https://www.google.com' target='blank'>Chính sách khui hộp sản phẩm Apple</a>
                                <span onClick={e => setSeeMore(false)}>Show Less <i className="fas fa-chevron-up"></i></span>
                            </>
                        }

                    </div>
                    <div className="footer__up__element">
                        <a href='https://www.google.com' target='blank'>Giới thiệu công ty (MWG.vn)</a>
                        <a href='https://www.google.com' target='blank'>Tuyển dụng</a>
                        <a href='https://www.google.com' target='blank'>Gửi góp ý, khiếu nại</a>
                        <a href='https://www.google.com' target='blank'>Tìm siêu thị (1604 shop)</a>
                        <a href='https://www.google.com' target='blank'>Xem bản mobile</a>

                    </div>
                    <div className="footer__up__element">
                        <span style={{ color: '#444' }} >TỔNG ĐÀI HỖ TRỢ (GỌI MIỄN PHÍ)</span>
                        <span style={{ color: '#666', wordSpacing: '3px' }} >Mua hàng   <strong style={{ color: '#000' }}>1800.1061 </strong> (7:30 - 22:00)</span>
                        <span style={{ color: '#666', wordSpacing: '3px' }} >Kỹ thuật   <strong style={{ color: '#000' }}>1800.1764 </strong> (7:30 - 22:00)</span>
                        <span style={{ color: '#666', wordSpacing: '3px' }} >Bảo hành   <strong style={{ color: '#000' }}>1800.1065 </strong> (8:00 - 21:00)</span>
                        <span style={{ color: '#666', wordSpacing: '3px' }} >Khiếu nại    <strong style={{ color: '#000' }}>1800.1063 </strong> (8:00 - 21:30)</span>
                        {/* <div style={{ marginTop: '20px' }} className="social-links">
                            <a href='https://www.google.com' target='blank'><img style={{ height: '48px', width: '80px' }} src={Logo1} alt='Logo' /></a>
                            <a href='https://www.google.com' target='blank'><img style={{ height: '48px', width: '80px' }} src={Logo} alt='Logo' /></a>

                        </div> */}

                    </div>
                    <div className="footer__up__element">
                        <div className="social-links">
                            <a href="https://www.facebook.com"><i className="fab fa-facebook-square colored"></i> FB</a>
                            <a href="https://www.facebook.com"><i style={{ color: 'red' }} className="fab fa-youtube"></i> YT</a>
                        </div>
                        <span style={{ color: '#2B75CF' }}>Team:</span>
                        <div className="logo-links">
                            <div style={{ display: "flex", paddingBottom: 10 }}><img style={{ height: '30px', borderRadius: "50%" }} src={Logo1} alt='Logo' /><div style={{ marginTop: 1, marginLeft: 5 }}><a href="https://www.facebook.com/longbody.nguyen/">LongBody</a></div></div>
                            <div style={{ display: "flex", paddingBottom: 10 }}><img style={{ height: '30px', borderRadius: "50%" }} src={Logo2} alt='Logo' /><div style={{ marginTop: 1, marginLeft: 5 }}><a href="https://www.facebook.com/coosi29">Quang Cối</a></div></div>
                            <div style={{ display: "flex", paddingBottom: 10 }}><img style={{ height: '30px', borderRadius: "50%" }} src={Logo3} alt='Logo' /><div style={{ marginTop: 1, marginLeft: 5 }}><a href="https://www.facebook.com/prince.saral.9">Saral Karki</a></div></div>
                        </div></div>


                </div>
                <div className="footer__down">
                    <p >© 2021. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 21/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 11/01/2021.
                    Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Xem chính sách sử dụng web
                    ↑
</p>
                </div>

            </Container>
        </footer>

    )
}

export default Footer
