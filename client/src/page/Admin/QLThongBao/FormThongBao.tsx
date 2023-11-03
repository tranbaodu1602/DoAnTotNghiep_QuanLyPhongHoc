import React, { useState } from 'react';

import './QLThongBao.scss'

const FormThongBao: React.FC = () => {
    const [tenThongBao, setTenThongBao] = useState('');
    const [chiTiet, setChiTiet] = useState('');
    const [ngayTao, setNgayTao] = useState(new Date().toISOString().slice(0, 10));
    const [dinhKem, setDinhKem] = useState<FileList | null>(null);
    const [error, setError] = useState('');

    const handleTenThongBaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTenThongBao(event.target.value);
    };

    const handleChiTietChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setChiTiet(event.target.value);
    };

    const handleDinhKemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        setDinhKem(files);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!tenThongBao || !chiTiet) {
            setError('Vui lòng điền tên thông báo và chi tiết.');
            return;
        }

        // Kiểm tra regex cho tên và chi tiết ở đây
        const tenThongBaoPattern = /^[a-zA-Z0-9\s]+$/;
        const chiTietPattern = /^[\w\s.!?,'"-]+$/;

        if (!tenThongBao.match(tenThongBaoPattern)) {
            setError('Tên thông báo không hợp lệ. Chỉ chấp nhận chữ, số và khoảng trắng.');
            return;
        }

        if (!chiTiet.match(chiTietPattern)) {
            setError('Chi tiết không hợp lệ.');
            return;
        }

        // Nếu không có lỗi, bạn có thể gửi dữ liệu lên máy chủ ở đây
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
                <label htmlFor="tenThongBao">Tên thông báo:</label>
                <input type="text" id="tenThongBao" className="form-control" value={tenThongBao} onChange={handleTenThongBaoChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="chiTiet">Chi tiết:</label>
                <textarea id="chiTiet" className="form-control" style={{ height: "250px", maxHeight: '450px', overflowY: 'auto' }} value={chiTiet} onChange={handleChiTietChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="ngayTao">Ngày tạo:</label>
                <input type="date" id="ngayTao" className="form-control" value={ngayTao} onChange={(e) => setNgayTao(e.target.value)} />
            </div>
            <div className="form-group" style={{ marginTop: '20px' }}>
                <label htmlFor="dinhKem">Đính kèm file: </label>
                <input type="file" id="dinhKem" onChange={handleDinhKemChange} multiple />
            </div>
            <div style={{ height: "90px", maxHeight: '90px', overflowY: 'auto' }}>
                {dinhKem && dinhKem.length > 1 && (
                    <ul>
                        {Array.from(dinhKem).map((file, index) => (

                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button type="submit" className="btn btn-primary" style={{ width: "90%" }}>Thêm thông báo</button>
            </div>
        </form>
    );
};
export default FormThongBao;
