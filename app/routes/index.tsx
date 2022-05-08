import { Box, Container, Text, Image, LinkBox, LinkOverlay, Heading } from "@chakra-ui/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gql, GraphQLClient } from "graphql-request";
import Card from "~/components/card";

const GetProductsQuery = gql`
  {
    products {
      id
      name
      image {
        url
      }
    }
  }
`;

export const loader = async () => {
  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/cl2vbpzo612jp01ywe3jqcfft/master",{
      headers:{
        Authorization: `Bearer ${process.env.REMIX_GRAPHCMS_CONTENT_API_KEY}`
      }
    }
  );

  const { products } = await graphcms.request(GetProductsQuery);
  return json({ products });
};

export default function Index() {
  let data = useLoaderData();
  console.log(data);

  return (
    <Box m={3}>
      <Container>
        <Heading textAlign="center" paddingBottom={4} paddingTop={4} fontSize={"lg"}> Chakra + Remix + GraphCMS Boilerplate</Heading>
        {data.products.map((product: { name: string, image: {url: string} }) => {
          return (
            <Card image={product.image.url} heading={product.name}/>
          );
        })}
      </Container>
    </Box>
  );
}
