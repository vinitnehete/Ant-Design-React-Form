import { Input } from "antd";
import { Typography } from "antd";
import { Checkbox } from "antd";

import { InboxOutlined } from "@ant-design/icons";

import { message, Upload } from "antd";
import { useState } from "react";
const { Title } = Typography;

const { Dragger } = Upload;

const App = () => {
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList.url);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const [state, setState] = useState({
    Email: "",
    Did_you_File_the_return_last_year: "",

    Was_the_SCorp_incorporated_in_2022: "",

    Was_there_any_change_in_Ownership_2022: false,

    Was_there_any_following_transcation_in_2022: [],
    Please_upload_the_following_documents: [],
  });

  const handleCheckboxChange = (event) => {
    const { value, field } = event.target;

    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onChange = (value, field) => {
    setState((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleMultiChange = (e) => {
    const a = [...state.Was_there_any_following_transcation_in_2022];
    if (a.includes(e.target.value)) {
      a.splice(a.indexOf(e.target.value), 1);
    } else {
      a.push(e.target.value);
    }
    setState({
      ...state,
      Was_there_any_following_transcation_in_2022: a,
    });
  };

  const handleDocumentChange = (e) => {
    const a = [...state.Please_upload_the_following_documents];
    if (a.includes(e.target.value)) {
      a.splice(a.indexOf(e.target.value), 1);
    } else {
      a.push(e.target.value);
    }
    setState({
      ...state,
      Please_upload_the_following_documents: a,
    });
  };

  console.log(state);
  return (
    <>
      <Title level={5}>Email</Title>
      <Input
        placeholder="Enter Email"
        onChange={(e) => onChange(e.target.value, "Email")}
      />

      <Title level={5}>Did you File the return last year?</Title>
      <Checkbox
        onChange={handleCheckboxChange}
        checked={state.Did_you_File_the_return_last_year === "Yes"}
        value="Yes"
        field="Did_you_File_the_return_last_year"
      >
        Yes
      </Checkbox>
      <Checkbox
        onChange={handleCheckboxChange}
        checked={state.Did_you_File_the_return_last_year === "No"}
        value="No"
        field="Did_you_File_the_return_last_year"
      >
        No
      </Checkbox>

      <Title level={5}>File Upload</Title>

      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>

      <Title level={5}>Was the S-Corp incorporated in 2022?</Title>
      <Checkbox
        onChange={handleCheckboxChange}
        checked={state.Was_the_SCorp_incorporated_in_2022 === "Yes"}
        value="Yes"
        field="Was_the_SCorp_incorporated_in_2022"
      >
        Yes
      </Checkbox>
      <Checkbox
        onChange={handleCheckboxChange}
        checked={state.Was_the_SCorp_incorporated_in_2022 === "No"}
        value="No"
        field="Was_the_SCorp_incorporated_in_2022"
      >
        No
      </Checkbox>

      <Title level={5}>Please Upload the Incorporation Documents</Title>

      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>

      <Title level={5}>
        Was there any change in Ownership Structure in 2022?
      </Title>
      <Checkbox
        o
        onChange={handleCheckboxChange}
        checked={state.Was_there_any_change_in_Ownership_2022 === "Yes"}
        value="Yes"
        field="Was_there_any_change_in_Ownership_2022"
      >
        Yes
      </Checkbox>
      <Checkbox
        o
        onChange={handleCheckboxChange}
        checked={state.Was_there_any_change_in_Ownership_2022 === "No"}
        value="No"
        field="Was_there_any_change_in_Ownership_2022"
      >
        No
      </Checkbox>

      <Title level={5}>Upload latest Shareholding pattern</Title>

      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>

      <div>
        <Title level={5}>Was there any following transcation in 2022?</Title>
        <Checkbox
          onChange={handleMultiChange}
          value="Capital Infusion"
          checked={state.Was_there_any_following_transcation_in_2022.includes(
            "Capital Infusion"
          )}
        >
          Capital Infusion
        </Checkbox>
        <Checkbox
          onChange={handleMultiChange}
          value="Capital Withdrawal"
          checked={state.Was_there_any_following_transcation_in_2022.includes(
            "Capital Withdrawal"
          )}
        >
          Capital Withdrawal
        </Checkbox>
        <Checkbox
          onChange={handleMultiChange}
          value="Related Party Transcation"
          checked={state.Was_there_any_following_transcation_in_2022.includes(
            "Related Party Transcation"
          )}
        >
          Related Party Transcation
        </Checkbox>

        <Title level={5}>Upload documents for the same:</Title>

        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>

        <Title level={5}>Please upload the following documents:</Title>
        <Checkbox
          onChange={handleDocumentChange}
          value="Bank Statement"
          checked={state.Please_upload_the_following_documents.includes(
            "Bank Statement"
          )}
        >
          Bank Statement
        </Checkbox>
        <Checkbox
          onChange={handleDocumentChange}
          value="Credit Card Statements"
          checked={state.Please_upload_the_following_documents.includes(
            "Credit Card Statements"
          )}
        >
          Credit Card Statements
        </Checkbox>
        <Checkbox
          onChange={handleDocumentChange}
          value="From 10991"
          checked={state.Please_upload_the_following_documents.includes(
            "From 10991"
          )}
        >
          From 10991
        </Checkbox>
        <Checkbox
          onChange={handleDocumentChange}
          value="From 940/941"
          checked={state.Please_upload_the_following_documents.includes(
            "From 940/941"
          )}
        >
          From 940/941
        </Checkbox>
        <Checkbox
          onChange={handleDocumentChange}
          value="EIN Certificate"
          checked={state.Please_upload_the_following_documents.includes(
            "EIN Certificate"
          )}
        >
          EIN Certificate
        </Checkbox>
        <Checkbox
          onChange={handleDocumentChange}
          value="IRS Acceptance Letter of S-Corp"
          checked={state.Please_upload_the_following_documents.includes(
            "IRS Acceptance Letter of S-Corp"
          )}
        >
          IRS Acceptance Letter of S-Corp
        </Checkbox>
        <Checkbox
          onChange={handleDocumentChange}
          value="Financials (if prepared)"
          checked={state.Please_upload_the_following_documents.includes(
            "Financials (if prepared)"
          )}
        >
          Financials (if prepared)
        </Checkbox>
      </div>



            <> 
            <p>{JSON.stringify(state , null , 2)}</p>
            </>

    </>
  );
};

export default App;
