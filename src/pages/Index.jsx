import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="#004E7C" color="white" p={4} align="center">
        <Heading size="md">Financial Times</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <VStack spacing={8} mt={8} align="stretch">
        {/* Headlines Section */}
        <Box>
          <Heading size="lg" mb={4}>Headlines</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="#F3F3F3" borderRadius="md">
              <Heading size="md">Headline 1</Heading>
              <Text>Summary of the headline 1...</Text>
            </Box>
            <Box p={4} bg="#F3F3F3" borderRadius="md">
              <Heading size="md">Headline 2</Heading>
              <Text>Summary of the headline 2...</Text>
            </Box>
            <Box p={4} bg="#F3F3F3" borderRadius="md">
              <Heading size="md">Headline 3</Heading>
              <Text>Summary of the headline 3...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Featured Articles Section */}
        <Box>
          <Heading size="lg" mb={4}>Featured Articles</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="#F3F3F3" borderRadius="md">
              <Heading size="md">Featured Article 1</Heading>
              <Text>Summary of the featured article 1...</Text>
            </Box>
            <Box p={4} bg="#F3F3F3" borderRadius="md">
              <Heading size="md">Featured Article 2</Heading>
              <Text>Summary of the featured article 2...</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="#004E7C" color="white" p={4} mt={8} textAlign="center">
        <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;