/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FunctionComponent, useState } from 'react';
import { saveAs } from 'file-saver';
import {
  Box,
  Button,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  Text,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

import { LogoContent } from '@root/typings/StyleGuide';
import { downloadOptions } from '@root/consts/logos';

const LogoCard: FunctionComponent<LogoContent> = ({ isDark, logo, heading, description }) => {
  const [selectedImageType, setSelectedImageType] = useState('png');

  const handleDownloadImage = () =>
    saveAs(`/logo/${logo}.${selectedImageType}`, `${logo}.${selectedImageType}`);

  return (
    <Box minWidth="335px" width="calc(33% - 26px)">
      <Box
        backgroundColor={isDark ? 'brand.900' : 'white'}
        borderRadius="4px"
        height="246px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderWidth="1px"
        position="relative"
      >
        <Image src={`/logo/${logo}.svg`} />
        <Menu closeOnSelect={false}>
          <MenuButton
            position="absolute"
            top="3"
            right="3"
            width="12px"
            height="12px"
            as={IconButton}
            icon={<Image src="/icon/download.svg" width="100%" height="100%" />}
          />
          <MenuList maxWidth="132px" minWidth="132px" position="absolute" left="-90px">
            <RadioGroup defaultValue={selectedImageType}>
              <Stack>
                {downloadOptions.map((option: string) => (
                  <MenuItem key={option} _hover={{ background: '#ECFDF9' }}>
                    <Radio
                      style={{ color: '#3AC6A3', borderColor: '#3AC6A3' }}
                      value={option}
                      onChange={(e) => {
                        setSelectedImageType(e.target.value);
                      }}
                      _checked={{ background: '#3AC6A3' }}
                    >
                      {option.toUpperCase()}
                    </Radio>
                  </MenuItem>
                ))}
              </Stack>
            </RadioGroup>
            <MenuItem as="div">
              <Button
                onClick={handleDownloadImage}
                type="button"
                color="#000000"
                backgroundColor="#4FDAB8"
              >
                {' '}
                Download{' '}
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box marginTop="20px">
        <Text color="brand.900" fontWeight="bold" fontSize="lg" marginBottom="12px">
          {heading}
        </Text>
        <Text color="gray.500" fontSize="sm">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default LogoCard;