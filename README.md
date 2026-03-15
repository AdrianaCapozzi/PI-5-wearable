# IoT e Análise de Dados como Ferramenta de Proteção à Mulheres
### Wearable de Alerta e Monitoramento

Este projeto propõe o desenvolvimento de uma solução baseada em **Internet das Coisas (IoT)** para apoiar a segurança de mulheres por meio de um **dispositivo wearable de alerta e monitoramento**.

O sistema permite que um dispositivo wearable envie dados em tempo real, como **localização, timestamp e eventos de emergência**, para uma infraestrutura de dados responsável pela ingestão, armazenamento e análise dessas informações.

Os dados coletados são processados em um ambiente de **engenharia e análise de dados**, permitindo identificar padrões de ocorrência e gerar visualizações que auxiliem no monitoramento e na tomada de decisão.

## Objetivo

Desenvolver uma arquitetura integrada de IoT capaz de:

- Capturar dados de sensores de um dispositivo wearable
- Transmitir dados para um sistema de ingestão
- Armazenar e processar os dados em ambiente de dados
- Analisar eventos de alerta e padrões de risco
- Disponibilizar visualizações por meio de dashboards

## Arquitetura do Sistema

Wearable (ESP32 + sensores)  
↓  
API de ingestão de dados  
↓  
Armazenamento e processamento de dados  
↓  
Databricks / Spark  
↓  
Dashboards e análise de dados

## Tecnologias Utilizadas

- ESP32 (hardware IoT)
- Python
- API REST
- Databricks
- Apache Spark
- Delta Lake
- SQL
- Visualização de dados / dashboards

## Contexto do Projeto

Projeto desenvolvido no âmbito do **Projeto Integrador da graduação em Engenharia de Computação**, com foco na aplicação de tecnologias de **IoT e análise de dados para soluções de impacto social**.

A proposta foi inspirada em discussões com **Promotoras Legais Populares (PLPs)**, que relataram desafios enfrentados por mulheres em situações de vulnerabilidade e a necessidade de ferramentas tecnológicas que facilitem o acionamento de ajuda em situações de risco.

## Status do Projeto

Em desenvolvimento.
