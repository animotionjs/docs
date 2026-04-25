<script lang="ts">
	import CodeBlock from './code.svelte';
</script>

# Code

## Animating code

The `<Code>` component uses [Shiki](https://shiki.style/) for beautiful syntax highlighting:

<CodeBlock />

```svelte
<script lang="ts">
	import { Presentation, Slide, Code, Action } from '@animotion/core';

	let code: Code;
</script>

<Presentation>
	<Slide class="h-full place-content-center place-items-center">
		<Code
			bind:this={code}
			lang="svelte"
			theme="poimandres"
			code={`
				<script>
					let count = 0;
					$: double = count * 2;
				<\/script>

				<button on:click={() => count++}>
					{double}
				</button>
			`}
			options={{ duration: 1000, stagger: 0.3, lineNumbers: true, containerStyle: false }}
		/>

		<Action
			do={() =>
				code.update`
					<script>
						let count = $state(0);
						let double = $derived(count * 2);
					<\/script>

					<button onclick={() => count++}>
						{double}
					</button>
				`}
		/>

		<Action do={() => code.selectLines`2,3`} />
		<Action do={() => code.selectLines`2-3,7`} />
		<Action
			do={() => {
				code.select`double`;
				code.selectAdd`{double}`;
			}}
		/>
		<Action do={() => code.selectLines`*`} />
	</Slide>
</Presentation>
```

You can pick one of many themes that come with Shiki, choose a language, and provide options to the `<Code />` component.

## Animating Code Changes

You can animate changes in your code by using the `update` method:

```ts
code.update`
	<script>
		let count = $state(0);
		let double = $derived(count * 2);
	<\/script>

	<button onclick={() => count++}>
		{double}
	</button>
`;
```

Animotion uses [Shiki Magic Move](https://shiki-magic-move.netlify.app/) to animate the code changes which does the diffing to know what changed, and then animates the changes.

## Experimental Code Update API

Having to pass the entire code string to the `update` method each time is tedious and repetitive. You can try the experimental code update API to surgically update the code:

```svelte
<Code
	bind:this={code}
	lang="svelte"
	theme="poimandres"
	code={`
		<script lang="ts">
			let count = $state(0);
		<\/script>
	`}
/>
```

```ts
// append code with an empty line
code.append`
	<button onclick={() => count += 1}>
		// ...
	</button>
`;
// insert code at line 3 with indent level of 1
(code.insert`3:1 let double = $derived(count * 2);`,
	// replace the exact code
	code.replace('// ...', '{count} * 2 = {double}'),
	// remove line 3 and lines 6 to 8
	code.remove`3,6-8`);
```

## Code Selection

You can select lines of code:

```ts
// select line
code.selectLines`2`;
// select multiple lines
code.selectLines`2,3`;
// select lines range
code.selectLines`2-3`;
// select lines range and lines
code.selectLines`2-3,7`;
// select all lines
code.selectLines`*`;
```

You can select parts of the code:

```ts
// select every token
code.select`count`;
// select first match
code.select`count:0`;
// select first match on line 4
code.select`4 count:0`;
// add another selection
code.selectAdd`() => count++`;
```

The methods return a promise that is resolved when the transition is done:

```svelte
<Action
	do={async () => {
		await code.selectLines`2,3`;
		await code.selectLines`2-3,7`;
		await code.select`count`;
		await code.selectLines`*`;
	}}
/>
```

Both the `selectLines` and `select` methods have additive counterparts, `selectLinesAdd` and `selectAdd`, which only add to the previous selection.

## Code Scrolling

You might have a scrollable code block:

```svelte
<Code
	bind:this={code}
	lang="svelte"
	theme="poimandres"
	code={`...`}
	class="h-[400px] overflow-y-auto"
	options={{ duration: 600, stagger: 0.3, containerStyle: false }}
/>
```

You can scroll to a line of code using the `scrollToLine` method:

```ts
await code.scrollToLine`2`;
```

You can hide the scrollbar using CSS:

```css
pre::-webkit-scrollbar {
	display: none;
}
```

You can also create a Tailwind class:

```css
@utility no-scrollbar {
	@apply [scrollbar-width:none] [&::-webkit-scrollbar]:hidden;
}
```

## Using Expressions

The `update`, `selectLines`, and `scrollToLine` tag functions support expressions:

```svelte
<script lang="ts">
	let expression = 'false';
</script>

<!-- ... -->

<Action
	do={() => {
		expression = 'true';
		code.update`let bool = ${expression}`;
	}}
>
```

## Code Indentation

Indenting code creates extra whitespace:

```svelte
<Code
	code={`
->-><script>
->->->let count = 0;
->->->$: double = count * 2;
->-><\/script>

->-><button on:click={() => count++}>
->->->{double}
->-></button>
	`}
/>
```

Animotion detects if you're using tabs or spaces and dedents the code for you:

```svelte
<Code
	code={`
		<script>
		->let count = 0;
		->$: double = count * 2;
		<\/script>
		<button on:click={() => count++}>
		->{double}
		</button>
	`}
/>
```

If you want to opt-out of this feature, you can set `autoIndent` to false:

```svelte
<Code autoIndent={false} />
```

## Chaining code animations

Instead of creating actions for the code animations yourself, you can use the `codes` prop to create them for you:

```svelte
<script lang="ts">
	import { Code } from '@animotion/core';

	// get a reference to the instance
	let code: Code;
</script>

<Code
	ref={(ref) => (code = ref)}
	lang="svelte"
	theme="poimandres"
	codes={[
		`
			<script>
				let count = 0;
				$: double = count * 2;
			<\/script>

			<button on:click={() => count++}>
				{double}
			</button>
		`,
		`
			<script>
				let count = $state(0);
				let double = $derived(count * 2);
			<\/script>

			<button onclick={() => count++}>
				{double}
			</button>
		`
	]}
/>

<Action
	undo={() => {
		code.selectLines`*`;
	}}
	actions={[
		() => code.selectLines`2,3`,
		() => code.selectLines`2-3,7`,
		() => {
			code.select`double`;
			code.selectAdd`{double}`;
		},
		() => code.selectLines`*`
	]}
/>
```

## Escape closing tags

Having a closing tag like `</script>` in your code block is going to cause problems because Svelte thinks you're trying to close the `<script>` tag in your component. To solve this problem use the backslash character to escape it:

```svelte
<Code>
	code={`
		<script>
			// ...
		<\/script>
	`}
</Code>
```
