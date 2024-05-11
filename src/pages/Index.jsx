import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Flex direction="column" align="center" justify="center" h="70vh" bgImage="https://images.unsplash.com/photo-1562322140-8baeececf3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYWlyZHJlc3NlcnxlbnwwfHx8fDE3MTU0NDA2NDN8MA&ixlib=rb-4.0.3&q=80&w=1080" bgPos="center" bgSize="cover" color="white">
        <Heading as="h1" size="2xl" fontWeight="bold" textAlign="center">
          Stylish Cuts & Vibrant Colors
        </Heading>
        <Text mt={4} fontSize="xl" fontWeight="medium">
          Discover your new look with us today!
        </Text>
        <Button mt={6} colorScheme="pink" size="lg">
          Book an Appointment
        </Button>
      </Flex>

      {/* About Section */}
      <VStack spacing={5} py={10} align="start">
        <Heading as="h2" size="xl" color="gray.800">
          About Us
        </Heading>
        <Text color="gray.600" fontSize="lg">
          At our salon, we believe in the beauty of every individual. Our team of experienced hairdressers ensures you receive the best treatment and leave our salon feeling fabulous.
        </Text>
      </VStack>

      {/* Services Section */}
      <Box py={10}>
        <Heading as="h2" size="xl" mb={5} textAlign="center" color="gray.800">
          Our Services
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} justify="center">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Hair Styling</Heading>
            <Text mt={4} color="gray.600">
              Get the perfect look for any occasion with our expert styling services.
            </Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Coloring</Heading>
            <Text mt={4} color="gray.600">
              Brighten your life with our premium hair coloring options.
            </Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Hair Treatments</Heading>
            <Text mt={4} color="gray.600">
              Revitalize your hair with our exclusive treatments.
            </Text>
          </Box>
        </Stack>
      </Box>

      {/* Contact Section */}
      <Flex align="center" justify="space-between" p={10} bg="gray.50">
        <VStack align="start">
          <Heading as="h2" size="xl" color="gray.800">
            Get in Touch
          </Heading>
          <Text color="gray.600">Feel free to reach out with any questions or to book an appointment!</Text>
        </VStack>
        <Button leftIcon={<FaPhone />} colorScheme="teal" variant="solid">
          Call Now
        </Button>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="gray.200" p={5}>
        <Flex justify="space-between" align="center">
          <Text>© 2023 Stylish Cuts Salon. All rights reserved.</Text>
          <Stack direction="row" spacing={6}>
            <Link href="#" isExternal>
              <FaFacebookF />
            </Link>
            <Link href="#" isExternal>
              <FaInstagram />
            </Link>
            <Link href="#" isExternal>
              <FaMapMarkerAlt />
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
