import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  date?: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  date = new Date().toLocaleString(),
}: ContactFormEmailProps) {
  return (
    <Html lang="pt-BR">
      <Head>
        <title>Nova mensagem do portfólio</title>
      </Head>
      <Preview>Nova mensagem recebida através do seu portfólio</Preview>
      <Tailwind>
        <Body className="font-sans bg-gray-50 text-gray-800">
          <Container className="max-w-2xl mx-auto p-4">
            <Section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <Section className="px-6 py-8">
                <Heading
                  as="h1"
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  ✨ Nova mensagem recebida
                </Heading>

                <Text className="text-lg mb-6">
                  Você recebeu uma nova mensagem através do formulário de
                  contato do seu portfólio:
                </Text>

                <Section className="bg-gray-50 rounded-lg p-4 mb-6">
                  <Text className="whitespace-pre-line text-gray-700">
                    {message}
                  </Text>
                </Section>

                <Hr className="border-gray-200 my-6" />

                <Section className="space-y-2">
                  <Text className="text-sm">
                    <strong>📩 E-mail do remetente:</strong>{" "}
                    {senderEmail || "Não informado"}
                  </Text>
                  <Text className="text-sm">
                    <strong>📅 Data:</strong> {date}
                  </Text>
                  <Text className="text-sm">
                    <strong>🌐 Origem:</strong> Formulário de contato
                  </Text>
                </Section>

                <Section className="mt-8 text-center text-sm text-gray-500">
                  <Text>
                    Esta mensagem foi enviada automaticamente através do seu
                    site portfólio.
                  </Text>
                  <Text className="mt-2">
                    © {new Date().getFullYear()} Miguel Rafael. Todos os
                    direitos reservados.
                  </Text>
                </Section>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
