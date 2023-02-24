import { Button, Space } from 'antd';

export default function FormInvoice() {
    return (
    <>
        <div id='header-invoice'>
            <li><h2>Premi Terbaik</h2></li>
            <li><h2>Periode</h2></li>
            <li><h2>Perluasan</h2></li>
            <li><h2>Harga Bangunan</h2></li>
         </div>

         <hr></hr>

         <div id='header-invoice'>
            <li><article><strong>Asuransi Kebakaran.</strong> <br />Rumah Tinggal bukan Ruko <br /><strong>No. Invoice: ABC12345</strong></article></li>
            <li><h3>1 Tahun</h3></li>
            <li><h3>-</h3></li>
            <li><h3>IDR 100,000,000.00</h3></li>
         </div>

        <div class='garis-miring'>
            <hr></hr>
         </div>

         <div id="right-side">
            <p>premi dasar: IDR 38,750.00</p>
            <hr />
            <p>biaya administrasi: IDR 10,000.00</p>
            <hr />
            <p>total: IDR 48,750.00</p>
        </div>

        <div class="button-kanan">
        <Space wrap>
                <Button type="primary">Lanjutkan Ke Pembayaran</Button>
        </Space>
        </div>
    </>
    );
  }