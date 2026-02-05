<script lang="ts">
	import Katex from './katex.svelte'
</script>

# Math

You can use [KaTeX](https://katex.org/) to write math formulas.

<Katex />

```svelte
<script lang="ts">
	import { Presentation, Slide, Transition } from '@animotion/core'
</script>

<Presentation>
	<Slide class="h-full place-content-center place-items-center">
		<Transition>
			<p>
				The probability of getting {`\\(k\\)`} heads when flipping {`\\(n\\)`} coins
			</p>
		</Transition>

		<Transition>
			{`
				\\[P(E) = {n \\choose k} p^k (1-p)^{ n-k} \\]
			`}
		</Transition>
	</Slide>
</Presentation>
```
