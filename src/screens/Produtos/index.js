import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Produtos() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "cropped de oncinha y2k",
      preco: 80,
      pix: 72,
      quantidade: 0,
      img: "https://i.pinimg.com/736x/70/b7/25/70b725e3c0b1553a8a38c695f941f22f.jpg"
    },
    {
      id: 2,
      nome: "saia jeans",
      preco: 120,
      pix: 108,
      quantidade: 0,
      img: "https://i.pinimg.com/736x/5a/5f/c9/5a5fc9b7ed4c81c1c5b85a9faee1ba3c.jpg"
    },
    {
      id: 3,
      nome: "calça Jeans baggy",
      preco: 200,
      pix: 180,
      quantidade: 0,
      img: "https://i.pinimg.com/736x/de/bf/9f/debf9fde2a68d2bf1efb1543a226b51f.jpg"
    },
    {
      id: 4,
      nome: "vestido casual",
      preco: 250,
      pix: 225,
      quantidade: 0,
      img: "https://i.pinimg.com/736x/5c/cd/14/5ccd14b14f2c10aa7cd59a1d2ac69017.jpg"
    },
    {
      id: 5,
      nome: "Jaqueta de Couro",
      preco: 400,
      pix: 360,
      quantidade: 0,
      img: "https://i.pinimg.com/736x/88/dc/0f/88dc0ff4abb53897848fda6c0e3c2979.jpg"
    }
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.card}>
        <Image source={{ uri: produtos[0].img }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{produtos[0].nome}</Text>
          <Text style={styles.valorNormal}>Preço: R$ {produtos[0].preco.toFixed(2)}</Text>
          <Text style={styles.valorPix}>Pix: R$ {produtos[0].pix.toFixed(2)}</Text>

          <View style={styles.quantidadeContainer}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                const novaLista = [...produtos];
                if (novaLista[0].quantidade > 0) {
                  novaLista[0].quantidade--;
                  setProdutos(novaLista);
                }
              }}
            >
              <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantidade}>{produtos[0].quantidade}</Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                const novaLista = [...produtos];
                novaLista[0].quantidade++;
                setProdutos(novaLista);
              }}
            >
              <Text style={styles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: produtos[1].img }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{produtos[1].nome}</Text>
          <Text style={styles.valorNormal}>Preço: R$ {produtos[1].preco.toFixed(2)}</Text>
          <Text style={styles.valorPix}>Pix: R$ {produtos[1].pix.toFixed(2)}</Text>

          <View style={styles.quantidadeContainer}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                const novaLista = [...produtos];
                if (novaLista[1].quantidade > 0) {
                  novaLista[1].quantidade--;
                  setProdutos(novaLista);
                }
              }}
            >
              <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantidade}>{produtos[1].quantidade}</Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                const novaLista = [...produtos];
                novaLista[1].quantidade++;
                setProdutos(novaLista);
              }}
            >
              <Text style={styles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: produtos[2].img }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{produtos[2].nome}</Text>
          <Text style={styles.valorNormal}>Preço: R$ {produtos[2].preco.toFixed(2)}</Text>
          <Text style={styles.valorPix}>Pix: R$ {produtos[2].pix.toFixed(2)}</Text>

          <View style={styles.quantidadeContainer}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                const novaLista = [...produtos];
                if (novaLista[2].quantidade > 0) {
                  novaLista[2].quantidade--;
                  setProdutos(novaLista);
                }
              }}
            >
              <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantidade}>{produtos[2].quantidade}</Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                const novaLista = [...produtos];
                novaLista[2].quantidade++;
                setProdutos(novaLista);
              }}
            >
              <Text style={styles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: produtos[3].img }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{produtos[3].nome}</Text>
          <Text style={styles.valorNormal}>Preço: R$ {produtos[3].preco.toFixed(2)}</Text>
          <Text style={styles.valorPix}>Pix: R$ {produtos[3].pix.toFixed(2)}</Text>

          <View style={styles.quantidadeContainer}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                const novaLista = [...produtos];
                if (novaLista[3].quantidade > 0) {
                  novaLista[3].quantidade--;
                  setProdutos(novaLista);
                }
              }}
            >
              <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantidade}>{produtos[3].quantidade}</Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                const novaLista = [...produtos];
                novaLista[3].quantidade++;
                setProdutos(novaLista);
              }}
            >
              <Text style={styles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: produtos[4].img }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{produtos[4].nome}</Text>
          <Text style={styles.valorNormal}>Preço: R$ {produtos[4].preco.toFixed(2)}</Text>
          <Text style={styles.valorPix}>Pix: R$ {produtos[4].pix.toFixed(2)}</Text>

          <View style={styles.quantidadeContainer}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                const novaLista = [...produtos];
                if (novaLista[4].quantidade > 0) {
                  novaLista[4].quantidade--;
                  setProdutos(novaLista);
                }
              }}
            >
              <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantidade}>{produtos[4].quantidade}</Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                const novaLista = [...produtos];
                novaLista[4].quantidade++;
                setProdutos(novaLista);
              }}
            >
              <Text style={styles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f2f6ff"
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 4
  },

  imagem: {
    width: "100%",
    height: 280,
    resizeMode: "cover"
  },

  info: {
    padding: 15
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1a2a6c"
  },

  valorNormal: {
    fontSize: 16,
    color: "#666"
  },

  valorPix: {
    fontSize: 18,
    color: "#1e88e5",
    fontWeight: "bold",
    marginTop: 5
  },

  quantidadeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },

  botao: {
    backgroundColor: "#1e88e5",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 8
  },

  botaoTexto: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },

  quantidade: {
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: "bold"
  }
});