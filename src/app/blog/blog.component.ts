import { Component ,Output,EventEmitter, Input} from '@angular/core';
import { Blog } from '../app.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
   //@Input() blog!:Blog;
  @Output() onLikeEvent= new EventEmitter()
  @Input() Newton!:Blog;
  onLike():void{
      this.onLikeEvent.emit(this.Newton)
  }
}
