import { useScreenHeight } from "@/src/commonFunction/screenWidthHeight";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, TextField } from "@mui/material";
import React from "react";

interface ContactDataType {
  firstName: string;
  lastName: string;
  organization: string;
  title: string;
  email: string;
  phone: string;
  mobilePhone: string;
  fax: string;
  street: string;
  city: string;
  region: string;
  postCode: string;
  country: string;
  websiteUrl: string[];
}

export default function Contact(props: {
  contactData: ContactDataType;
  setContactData: React.Dispatch<React.SetStateAction<ContactDataType>>;
}) {
  const screenHeight = useScreenHeight();

  const handleWebsiteUrlChange = (index: number, value: string) => {
    const updatedWebsiteUrls = [...props.contactData.websiteUrl];
    updatedWebsiteUrls[index] = value;
    props.setContactData((prevData) => ({
      ...prevData,
      websiteUrl: updatedWebsiteUrls,
    }));
  };

  const handleAddWebsiteUrlField = () => {
    props.setContactData((prevData) => ({
      ...prevData,
      websiteUrl: [...prevData.websiteUrl, ""],
    }));
  };

  const handleRemoveWebsiteUrlField = (index: number) => {
    const updatedWebsiteUrls = [...props.contactData.websiteUrl];
    updatedWebsiteUrls.splice(index, 1);
    props.setContactData((prevData) => ({
      ...prevData,
      websiteUrl: updatedWebsiteUrls,
    }));
  };

  return (
    <div
      className="py-5 max-w-[458px]"
      style={{ height: `${screenHeight - 400}px`, overflow: "auto" }}
    >
      <TextField
        fullWidth
        label="First name"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.firstName}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            firstName: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="Last name"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.lastName}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            lastName: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="Organization"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.organization}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            organization: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="Title"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.title}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            title: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="Email"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.email}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            email: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="Phone"
        type="number"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.phone}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            phone: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="Mobile phone"
        id="fullWidth"
        type="number"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.mobilePhone}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            mobilePhone: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="Fax"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.fax}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            fax: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="Street"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.street}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            street: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="City"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.city}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            city: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="Region"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.region}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            region: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="Postcode"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.postCode}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            postCode: e.target.value,
          })
        }
      />

      <TextField
        fullWidth
        label="Country"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.contactData.country}
        onChange={(e) =>
          props.setContactData({
            ...props.contactData,
            country: e.target.value,
          })
        }
      />

      {props.contactData.websiteUrl.map((url, index) => (
        <Box key={index} display="flex" alignItems="center" mb={2}>
          <TextField
            fullWidth
            label="Website URL"
            className="bg-white"
            size="small"
            value={url}
            onChange={(e) => handleWebsiteUrlChange(index, e.target.value)}
          />
          <div className="mx-[10px]">
            {props.contactData.websiteUrl?.length - 1 != index && (
              <Button
                className="min-w-[30px] min-h-[30px] rounded-[50%]"
                onClick={() => handleRemoveWebsiteUrlField(index)}
              >
                <RemoveIcon />
              </Button>
            )}

            {props.contactData.websiteUrl?.length - 1 === index && (
              <Button
                className="min-w-[30px] min-h-[30px] rounded-[50%]"
                onClick={handleAddWebsiteUrlField}
              >
                <AddIcon />
              </Button>
            )}
          </div>
        </Box>
      ))}
    </div>
  );
}
