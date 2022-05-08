import {
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Card(props: {image: string, heading: string}) {
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          direction={{ base: 'column', md: 'row' }}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="green.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                props.image
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'xl'} fontFamily={'body'} textAlign="center">
             {props.heading}
            </Heading>
          </Stack>
        </Stack>
      </Center>
    );
  }