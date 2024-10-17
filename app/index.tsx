import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

interface Todo {
  key: string;
  value: string;
  isDone: boolean;
}

export default function Index() {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoHandler = () => {
    // add the todo
    if (todo.length > 0) {
      setTodoList((prevTodo) => [
        ...prevTodo,
        { key: Math.random().toString(), value: todo, isDone: false },
      ]);
    }
    setTodo("");
  };

  const toggleHandler = (todoKey: string) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.key === todoKey ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Todo"
          style={styles.input}
          value={todo}
          onChangeText={(text) => setTodo(text)}
        />
        <Button title="Add Todo" onPress={addTodoHandler} />
      </View>

      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <View style={styles.todoItemWrapper}>
            <TouchableOpacity style={{ width: "80%" }}>
              <View style={styles.todoItem}>
                <Text
                  style={{
                    textDecorationLine: item.isDone ? "line-through" : "none",
                  }}
                >
                  {item.value}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleHandler(item.key)}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },

  todoItemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  todoItem: {
    padding: 15,
    backgroundColor: "#bada55",
    borderWidth: 1,
    borderColor: "#FF0000",
    borderRadius: 5,
    marginBottom: 10,
  },
});
