VERSION := $(shell cat version)
DISTDIR := $(PWD)/FireflyRPG-Roll20-Engine-v$(VERSION)

SILENT = @
RM     = rm -f
SRM    = $(SILENT)$(RM)
RMDIR  = rm -rf
SRMDIR = $(SILENT)$(RMDIR)
MKDIR  = install -m 755 -d
SMKDIR = $(SILENT)$(MKDIR)
LL     = ls -l
SLL    = $(SILENT)$(LL)
ZIP    = zip --filesync -r9qy
SZIP   = $(SILENT)$(ZIP)


.PHONY: docs js default prepare dist-clean clean dist-clean dist-zip_post

default: js

js:
	yui-compressor -v CortexPlus-DicePool.js  > dist/cortex-engine.min.js
	cat CortexConstants.js dist/cortex-engine.min.js > dist/cortex-engine.js

docs:
	pandoc README.md  -o README.html --template docs/pandoc.html -s -S --toc --toc-depth 3

prepare: js docs
	-$(SRMDIR) $(DISTDIR)
	$(MKDIR) $(DISTDIR)
	bash preparerelease.sh $(DISTDIR)

dist-zip_post:
	$(ZIP) $(DISTDIR).zip $(notdir $(DISTDIR))
	$(RMDIR) $(DISTDIR)
	$(LL) $(notdir $(DISTDIR)).zip

dist-zip: prepare dist-zip_post

clean:
	$(SRM) dist/*

dist-clean: clean
	-$(SRMDIR) $(DISTDIR)
	$(SRM) $(DISTDIR).zip
