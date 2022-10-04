import { TestContext } from '@aurelia/testing';
import { Aurelia, CustomElement, StyleConfiguration } from '@aurelia/runtime-html';

export async function bootstrap(template, $class, dependencies: any[] = []) {
    const ctx = TestContext.create();
    const container = ctx.container;
    const platform = ctx.platform;

    const root = ctx.doc.body.appendChild(ctx.createElement('div'));
    const host = root.appendChild(ctx.createElement('app'));

    container.register(...dependencies);

    const au = new Aurelia(container);

    const App = CustomElement.define({
        name: 'app',
        template,
    }, $class);

    const component = container.get(App);

    au.app({ component, host });

    await au.start();

    return { container, ctx, au, host, platform, destroy: async () => {
        await au.stop();
        host.remove();
    } };
}

export async function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}