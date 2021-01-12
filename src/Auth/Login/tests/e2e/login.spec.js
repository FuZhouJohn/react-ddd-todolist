describe('登录页',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/login')
    })
    it('正常登录',()=>{
        cy.get('input#name').eq(0).type('zhuangjinan')
        cy.get('input#password').eq(0).type('zhuangjinan')
        cy.contains('现在登录').click()
        cy.url().should('include', '/dash/home')
    })
    it('未输入用户名',()=>{
        cy.get('input#password').eq(0).type('zhuangjinan')
        cy.contains('现在登录').click()
        cy.url().should('include', '/login')
        cy.contains('此为必填项').should('exist')
    })
})
