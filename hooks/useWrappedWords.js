import React from "react";
import parse from "html-react-parser";

function wrapTextNodes(node) {
  if (typeof node === "string") {
    return node.split(" ").map((word, index) =>
      word.trim() !== "" ? (
        <span key={index} className="ia-word">
          <span className="ia-word__in">{word}</span>
        </span>
      ) : (
        " "
      )
    );
  } else if (React.isValidElement(node)) {
    return React.cloneElement(node, {
      children: React.Children.map(node.props.children, wrapTextNodes),
    });
  }
  return node;
}

export function useWrappedWords(htmlString) {
  const parsedContent = parse(htmlString); // Преобразуем HTML-строку в React-элементы
  return React.Children.map(parsedContent, wrapTextNodes);

}