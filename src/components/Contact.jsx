import { Box, VStack, Heading, Input, Textarea, Button, Grid, FormControl, FormLabel } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Contact() {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      minH="100vh" 
      bgImage="url('/softball.png')" 
      bgSize="80%" 
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#EF3E42" fontFamily="'Pacifico', cursive">
        Contact Us
      </Heading>
      
      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#4B4B4B"
        bgImage="linear-gradient(-45deg, #38393d 25%, transparent 25%, transparent 50%, #38393d 50%, #38393d 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#005A9C"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Grid gap={4}>
          <FormControl id="name">
            <FormLabel color="#FFFFFF" fontFamily="'Pacifico', cursive">
              Name
            </FormLabel>
            <Input
              placeholder="Your Name"
              bgColor="#FFFFFF"
              color="#38383d"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel color="#FFFFFF" fontFamily="'Pacifico', cursive">
              Email
            </FormLabel>
            <Input
              type="email"
              placeholder="Your Email"
              bgColor="#FFFFFF"
              color="#38393d"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl id="message">
            <FormLabel color="#FFFFFF" fontFamily="'Pacifico', cursive">
              Message
            </FormLabel>
            <Textarea
              placeholder="Your Message"
              bgColor="#FFFFFF"
              color="#38393d"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
              rows={4}
            />
          </FormControl>

          <Button
            mt={4}
            bgColor="#005A9C"
            color="#FFFFFF"
            minW="100%"
            maxW="45%"
            alignSelf="center"
            fontFamily="'Pacifico', cursive"
            fontWeight="medium"
            fontSize="xl"
            borderRadius="8px"
            borderColor="#005A9C"
            borderWidth="3px"
            _hover={{ borderColor: '#FFFFFF' }}
          >
            Submit
          </Button>
        </Grid>
      </MotionBox>
    </VStack>
  );
}

export default Contact;
