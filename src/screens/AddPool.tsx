import React, {useEffect} from 'react';
import {Button, Input} from 'react-native-elements';
import styled from 'styled-components';
import {Formik} from 'formik';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import * as Yup from 'yup';

const AddPool: React.RF = () => {
  interface FormProps {
    name: String;
    capacity: Number | '';
    photo?: String;
  }
  const AddPoolSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').required('Required field'),
    capacity: Yup.number().required('Required field'),
  });

  useEffect(() => {
    const askPermission = async () => {
      try {
        const newCameraPermission = await Camera.requestCameraPermission();
      } catch (error) {
        console.log('error >> ', error);
      }
    };
    askPermission();
  }, []);
  const devices = useCameraDevices();
  const device = devices.back;

  console.log('devices >>', devices);

  const takePicture = async camera => {
    const options = {quality: 0.5, base64: true};
    try {
      const data = await camera.takePictureAsync(options);
    } catch (error) {
      console.log('error >> ', error);
    }
  };

  const initialValues: FormProps = {
    name: '',
    capacity: '',
    photo: '',
  };
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={AddPoolSchema}
        onSubmit={values => {
          console.log('>> ', values);
        }}
      >
        {({handleSubmit, handleChange, handleBlur, values, errors}) => (
          <>
            <Input
              placeholder="Pool Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              errorMessage={errors.name}
            />
            <Input
              keyboardType="number-pad"
              placeholder="Capacity (m3)"
              onChangeText={handleChange('capacity')}
              onBlur={handleBlur('capacity')}
              value={values.capacity}
              errorMessage={errors.capacity}
            />
            {device && (
              <Camera
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'red',
                }}
                device={device}
                isActive={device != null}
              />
            )}
            <Button
              title="Add Photo"
              icon="camera"
              type="outline"
              onPress={() => takePicture()}
            />
            <Button
              title="Add  Pool"
              type="solid"
              disabled={Object.keys(errors).length > 0}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
export default AddPool;
