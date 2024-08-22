# Definindo o binário do PNPM
PNPM := pnpm

# Ação padrão quando apenas 'make' é digitado
all: install dev

# Instala as dependências do projeto
install:
	@$(PNPM) install

# Roda o ambiente de desenvolvimento
run:
	@$(PNPM) run dev

# Constrói o aplicativo para produção e exporta os arquivos estáticos
build-export:
	@$(PNPM) run build-export

# Inicia o servidor de produção
start:
	@$(PNPM) run start

# Executa o linter no código
lint:
	@$(PNPM) run lint

# Executa os testes
test:
	@$(PNPM) run test

# Prepara o ambiente de hooks do git com o Husky
prepare:
	@$(PNPM) run prepare

# Limpa o cache do PNPM e node_modules
clean:
	@$(PNPM) cache clean
	@rm -rf node_modules

# Ajuda
help:
	@echo "Comandos disponíveis:"
	@echo "   make install       - Instala as dependências do projeto"
	@echo "   make dev           - Roda o ambiente de desenvolvimento"
	@echo "   make build-export  - Constrói o aplicativo para produção e exporta os arquivos estáticos"
	@echo "   make start         - Inicia o servidor de produção"
	@echo "   make lint          - Executa o linter no código"
	@echo "   make test          - Executa os testes"
	@echo "   make prepare       - Prepara o ambiente de hooks do git com o Husky"
	@echo "   make clean         - Limpa o cache do PNPM e node_modules"
	@echo "   make help          - Mostra esta ajuda"

# Configuração do Makefile para não confundir arquivos com comandos
.PHONY: all install dev build-export start lint test prepare clean help
