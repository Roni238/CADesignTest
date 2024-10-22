export const abbreviationsMixin = {
  methods: {
    abbreviationsFileName(fileName) {
      if (!fileName) return ''

      const extension = fileName.slice(fileName.lastIndexOf('.')) // формат файла
      const baseName = fileName.slice(0, fileName.lastIndexOf('.')) // имя файла без расширений

      // Сокращаем имя файла, если оно длиннее 17 символов
      const truncatedBaseName = baseName.length > 17 ? baseName.slice(0, 17) + '..' : baseName

      return `${truncatedBaseName}${extension}` // сокращённое имя с расширением
    }
    //тут можно сделать сокращения для описаний и прочего
  }
}
