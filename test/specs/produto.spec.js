describe('Compra até a Página do Produto', () => {
  before(async () => {
    // Mapeia e espera a palavra Products na home
    const tituloProdutos =
      '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup/android.widget.TextView';
    await $(tituloProdutos).waitForDisplayed();
  });

  it('Seleciona o produto Mochila', async () => {
    // Mapeia e clica na foto da mochila
    const produto = '//android.widget.ImageView[@content-desc="Sauce Labs Backpack"]';
    await $(produto).click();

    // Mapeia e valida o nome do produto
    const nomeProduto =
      '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView';
    expect(await $(nomeProduto).getText()).toEqual('Sauce Labs Backpack');

    // Mapeia e valida o preço do produto
    const precoProduto =
      '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.LinearLayout/android.widget.TextView';
    expect(await $(precoProduto).getText()).toEqual('$ 29.99');

    // Arrasta para Cima
    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 350, y: 1100 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 1000, x: 350, y: 300 },
          { type: 'pointerUp', button: 0 },
        ],
      },
    ]);

    // Mapeia e clica no botão
    const botaoProduto = '//android.widget.Button[@content-desc="Tap to add product to cart"]';
    await $(botaoProduto).click();
  });
});
