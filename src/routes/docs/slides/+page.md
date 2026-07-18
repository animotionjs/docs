<script lang="ts">
	import Slides from './slides.svelte';
	import Events from './events.svelte';
	import Components from './components.svelte';
</script>

# Slides

## Creating slides

To create a slide use the `<Slide>` component inside the `<Presentation>` component:

<Slides />

```svelte
<script>
	import { Presentation, Slide } from '@animotion/core';
</script>

<Presentation>
	<Slide class="h-full place-content-center place-items-center">
		<p class="text-8xl font-bold drop-shadow-sm">🪄 Animotion</p>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<img class="rounded-lg drop-shadow-sm" src="/nod-of-approval.gif" />
	</Slide>
</Presentation>
```

The `<Slide>` component uses CSS grid by default for the layout, so it's not necessary to specify the display mode.

## Slide events

You can use the `in` and `out` props to pass a callback which runs when the slide enters and exits the viewport:

<Events />

```svelte
<script>
	import { Presentation, Slide } from '@animotion/core';
</script>

<Presentation>
	<Slide in={() => alert('slide 1 enter')} out={() => alert('slide 1 exit')}>
		<p class="text-8xl font-bold drop-shadow-sm">Slide 1</p>
	</Slide>

	<Slide in={() => alert('slide 2 enter')} out={() => alert('slide 2 exit')}>
		<p class="text-8xl font-bold drop-shadow-sm">Slide 2</p>
	</Slide>
</Presentation>
```

## Components

Svelte is a declarative JavaScript framework, so components are a great way to organize, and make your code reusable. This could be a `<Progress>` component inside the `lib` folder:

<Components />

```svelte
<script>
	import { Slide } from '@animotion/core';
	import { tween } from '@animotion/motion';

	let progress = tween(0);

	async function animate() {
		await progress.to(1_000_000);
	}
</script>

<button onclick={animate}>
	{progress.current.toLocaleString('en', { maximumFractionDigits: 0 })}
</button>
```

You can import, and use the `<Progress>` component inside the slide:

```svelte
<script>
	import { Presentation, Slide } from '@animotion/core';
	import Progress from '$lib/progress.svelte';
</script>

<Presentation>
	<Slide>
		<Progress />
	</Slide>
</Presentation>
```

## Presentation Options

The `disableLayout` option toggles the built-in Reveal.js layout engine and enforces a fixed aspect ratio, auto-centers content, and scales slides uniformly using CSS transforms to fit any screen size. It's disabled by default, but you can enable it through the `options` prop:

```svelte
<script>
	import { Presentation } from '@animotion/core';
</script>

<Presentation options={{
	// default aspect ratio
	width: 960px,
	height: 700px,

	// enable the default layout
	disableLayout: false,

	// other options
	transition: 'slide',
	display: 'grid'
}}>
	<!-- ... -->
</Presentation>
```

You might have noticed that in the examples we use CSS grid layout properties, but don't specify `grid` for the slide display. That's because the default `display` option is set to `grid`.

```svelte
<Slide class="h-full place-content-center place-items-center">
	<!-- centered -->
</Slide>
```

You can change the slide animation, show or hide the controls, and show the current slide in the URL hash among other options. You can find the [default Animotion presentation options](https://github.com/animotionjs/animotion/blob/main/src/lib/components/presentation.svelte#L30-L65) in the source code on GitHub.

## Custom slide transitions

If you want, you can override the default slide transitions in `app.css`:

```css
.reveal .slides > section {
	transition:
		transform 0.6s ease,
		opacity 0.6s ease !important;

	&.past {
		transform: translateY(100%) scale(0.8) !important;
		opacity: 0;
	}

	&.present {
		transform: translateY(0) scale(1) !important;
		opacity: 1;
	}

	&.future {
		transform: translateY(100%) scale(0.8) !important;
		opacity: 0;
	}
}
```
