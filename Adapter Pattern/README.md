# Adapter Pattern

This is a structural pattern where the interface of one class is translated into another. This pattern lets classes work together that could not otherwise because of incompatible interfaces.
This pattern is often used to create wrappers for new refactored APIs so that other existing old APIs can still work with them. This is usually done when new implementations or code refactoring (done for reasons like performance gains) result in a different public API, while the other parts of the system are still using the old API and need to be adapted to work together.

> Source: [JavaScript Design Patterns - Soumyajit Pathak](https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15)