---
title: Avoid Provider Hell with composition
date: 2020-11-03
---

When we're working with the React Context API it's not hard to find ourselves in
a situation where we're using multiple Context Providers and creating a Provider
Hell like this:

```jsx
const Main = () => (
  <ProviderA>
    <ProviderB>
      <ProviderC>
        <ProviderD>
          <ProviderE>
            <App />
          </ProviderE>
        </ProviderD>
      </ProviderC>
    </ProviderB>
  </ProviderA>
)
```

This is not wrong, but as a developer I always like to think in different and
better ways I can solve the same problem, to make it easier for other developers
to read and understand my code. So I found a better way to work with multiple
Context Providers and make my component more readable.

## Composition is the way

To avoid this type of nesting, we can use a principle of the Functional
Programming paradigm I like the most: **Composition**.

Intead of declaring a Provider within the other, we can create a helper function
that **compose** multiple Providers and return a single Provider component.

```javascript
const composeProviders = (...providers) => ({ children }) => {
  return providers.reduceRight(
    (child, Provider) => <Provider>{child}</Provider>,
    children
  )
}
```

With our `composeProviders` function, we can compose our Providers as follows:

```jsx
const Providers = composeProviders(
  ProviderA,
  ProviderB,
  ProviderC,
  ProviderD,
  ProviderE
)

const Main = () => (
  <Providers>
    <App />
  </Providers>
)
```

And the most exciting thing here is that you can be creative and start composing
more code with the same principle! 🤩
