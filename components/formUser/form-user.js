import { Form, Select, InputNumber, Input, Button, Upload, Space, Checkbox } from "antd";
import { Row, Col } from "antd";

import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    // span: 8
    // offset: 0
  },
  wrapperCol: {
    span: 10
  }
};

const normFile = e => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

export default function FormUser() {
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };
  const onChange = (value) => {
    console.log('changed', value);
  };

  return (
    <div className="fnew-device-page-wrapper">
      <Form
        name="new-device-form"
        {...formItemLayout}
        onFinish={onFinish}
        hideRequiredMark
      >
        <Row>
          <Col span={12}>
            <Form.Item
              name="waktu_pertanggungan"
              label="Jangka Waktu Pertanggungan"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select the type of your device!"
                }
              ]}
            >
              <Select placeholder="Pilih Jangka Waktu Pertanggungan">
                <Option value="1"> 1 </Option>
                <Option value="2"> 2 </Option>
                <Option value="3"> 3 </Option>
                <Option value="4"> 4 </Option>
                <Option value="5"> 5 </Option>
                <Option value="6"> 6 </Option>
                <Option value="7"> 7 </Option>
                <Option value="8"> 8 </Option>
                <Option value="9"> 9 </Option>
                <Option value="10"> 10 </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Alamat Objek Pertanggungan">
                <TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
        <Col span={12}>
            <Form.Item
              name="okupasi"
              label="Okupasi"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select the type of your device!"
                }
              ]}
            >
              <Select placeholder="Pilih Okupasi">
                <Option value="Rumah"> Rumah </Option>
                <Option value="Ruko"> Ruko </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name={["user", "provinsi"]} label="Provinsi">
              <Input />
            </Form.Item>
            </Col>
        </Row>  

        <Row>
          <Col span={12}>
            <Space>
            <Form.Item label="Harga Bangunan">
              <Form.Item name="harga-bangunan" noStyle>              
                <InputNumber
                    defaultValue={0}
                    formatter={value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={onChange}
                    />
                </Form.Item>
            </Form.Item>
            </Space>
          </Col>
          <Col span={6}>
          <Form.Item name={["user", "kota/kabupaten"]} label="Kota/Kabupaten">
              <Input />
            </Form.Item>
            </Col>
        <Col span={6}>
          <Form.Item name={["user", "daerah"]} label="Daerah">
              <Input />
            </Form.Item>
            </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item label="Konstruksi" name="disabled" valuePropName="checked">
                <Checkbox.Group onChange={onChange}>
                    <Row><Checkbox value='kelas1'>Kelas I</Checkbox></Row>
                    <Row><Checkbox value='kelas2'>Kelas II</Checkbox></Row>
                    <Row><Checkbox value='kelas3'>Kelas III</Checkbox></Row>
                </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Perluasan" name="disabled" valuePropName="unchecked">
                <Checkbox>Gempa Bumi</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6
          }}
        >
          <Button shape="round" type="primary" htmlType="submit">
            Add a device
          </Button>

          <Button shape="round" danger>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};