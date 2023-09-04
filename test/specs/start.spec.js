describe('Primeiro teste', () => {
    it('acessar o menu forms', async () => {
        await $('~Forms').click()
        await $('~test-input').setValue('test')
        expect(await $('~text-input')).toBeDisplayed()
    });
});